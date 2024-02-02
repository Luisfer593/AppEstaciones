-- Database: dbestaciones

-- DROP DATABASE IF EXISTS dbestaciones;

CREATE DATABASE dbestaciones
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
    
    
-- Elimina la tablas relacionadas "sensores"
--DROP TABLE IF EXISTS sensor CASCADE;


--tabla provincia
CREATE TABLE provincia (
    prov_id SERIAL PRIMARY KEY,
    prov_nombre VARCHAR(100) NOT NULL
);

--tabla canton
CREATE TABLE canton (
    cant_id SERIAL PRIMARY KEY,
    prov_id INTEGER REFERENCES provincia(prov_id) NOT NULL,
    cant_nombre VARCHAR(100) NOT NULL
);

--tabla parroquia
CREATE TABLE parroquia (
    parr_id SERIAL PRIMARY KEY,
    cant_id INTEGER REFERENCES canton(cant_id) NOT NULL,
    parr_nombre VARCHAR(100) NOT NULL,
    parr_tipo VARCHAR(50)
);

CREATE TABLE comunidad (
    comu_id SERIAL PRIMARY KEY,
    parr_id INTEGER REFERENCES parroquia(parr_id) NOT NULL,
    comu_nombre VARCHAR(100) NOT NULL
);

--tabla tipoestacion
CREATE TABLE tipoestacion (
    tipoesta_id SERIAL PRIMARY KEY,
    tipoesta_nombre VARCHAR(50) NOT NULL
);
--tabla estacion
CREATE TABLE estacion (
    esta_id SERIAL PRIMARY KEY,
    comu_id INTEGER REFERENCES comunidad(comu_id) NOT NULL,
    tipoesta_id INTEGER REFERENCES tipoestacion(tipoesta_id) NOT NULL,
    esta_nombre VARCHAR(50) NOT NULL,
    esta_ubicacion VARCHAR(400),
    esta_latitud DOUBLE PRECISION,
    esta_longitud DOUBLE PRECISION,
    esta_alturaterreno VARCHAR(50),
    esta_propietarioterreno VARCHAR(150),
    esta_propietarioinstitucion VARCHAR(150),
    esta_institucionacargo VARCHAR(150),
    esta_imagen VARCHAR(100)NOT NULL   --modificado
);

--tabla observacionestacion
CREATE TABLE observacionestacion (
    obseesta_id SERIAL PRIMARY KEY,
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    obseesta_descripcion VARCHAR(200) NOT NULL,
    obseesta_fecha DATE
);

--tabla marca
CREATE TABLE marca (
    marc_id integer SERIAL PRIMARY KEY,
    marc_nombre character varying(200)
);

--tabla sensores
CREATE TABLE sensores (
    sens_id SERIAL PRIMARY KEY,
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    marc_id INTEGER REFERENCES marca(marc_id) NOT NULL,
    sens_nombre character varying(100) NOT NULL,
    sens_modelo character varying(100),
    sens_numeroserie character varying(100),
    sens_estado character varying(50),
    sens_imagen character varying(100) Not null  --agregado
);

--tabla observacionsensores 
CREATE TABLE observacionsensores (
    obsesens_id integer SERIAL PRIMARY KEY,
    sens_id integer NOT NULL,
    obsesens_descripcion character varying(400),
    obsesens_fecha date
);

--tabla sens_varidata
CREATE TABLE sens_varidata (
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,            --modificado
    varidata_id INTEGER REFERENCES variabledataloger(varidata_id) NOT NULL
);

--tabla unidadmedida
CREATE TABLE unidadmedida (
    unidmedi_id integer SERIAL PRIMARY KEY,
    unidmed_simbolo character varying(10),
    unidmed_descripcion character varying(200)
);


--tabla variabledataloger
CREATE TABLE variabledataloger (
    varidata_id integer SERIAL PRIMARY KEY,
    unidmedi_id integer NOT NULL,
    varidata_id_nombre character varying(200),
    varidata_id_abreviatura character varying(50)
);

--tabla variableservidor
CREATE TABLE variableservidor (
    variserv_id integer SERIAL PRIMARY KEY,
    unidmedi_id integer NOT NULL,
    variserv_nombre character varying(200) NOT NULL,
    variserv_abreviatura character varying(20)
);

--tabla sens_variserv
CREATE TABLE sens_variserv (
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL
);

--tabla datocrudoservidorm1
CREATE TABLE datocrudoservidorm1 (
    datocrudservm1_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm1_fecha DATE NOT NULL,
    datocrudservm1_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm1_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm1_valor VARCHAR(20) NOT NULL,
    datocrudservm1_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm2
CREATE TABLE datocrudoservidorm2 (
    datocrudservm2_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm2_fecha DATE NOT NULL,
    datocrudservm2_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm2_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm2_valor VARCHAR(20) NOT NULL,
    datocrudservm2_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm3
CREATE TABLE datocrudoservidorm3 (
    datocrudservm3_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm3_fecha DATE NOT NULL,
    datocrudservm3_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm3_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm3_valor VARCHAR(20) NOT NULL,
    datocrudservm3_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm4
CREATE TABLE datocrudoservidorm4 (
    datocrudservm4_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm4_fecha DATE NOT NULL,
    datocrudservm4_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm4_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm4_valor VARCHAR(20) NOT NULL,
    datocrudservm4_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm5
CREATE TABLE datocrudoservidorm5 (
    datocrudservm5_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm5_fecha DATE NOT NULL,
    datocrudservm5_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm5_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudserm5_valor VARCHAR(20) NOT NULL,
    datocrudservm5_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm6
CREATE TABLE datocrudoservidorm6 (
    datocrudservm6_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm6_fecha DATE NOT NULL,
    datocrudservm6_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm6_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm6_valor VARCHAR(20) NOT NULL,
    datocrudservm6_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm7
CREATE TABLE datocrudoservidorm7 (
    datocrudservm7_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm7_fecha DATE NOT NULL,
    datocrudservm7_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm7_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm7_valor VARCHAR(20) NOT NULL,
    datocrudservm7_estado VARCHAR(10) NOT NULL
 
);

--tabla datocrudoservidorm8

CREATE TABLE datocrudoservidorm8 (
    datocrudservm8_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm8_fecha DATE NOT NULL,
    datocrudservm8_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm8_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm8_valor VARCHAR(20) NOT NULL,
    datocrudservm8_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm9
CREATE TABLE datocrudoservidorm9 (
    datocrudservm9_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm9_fecha DATE NOT NULL,
    datocrudservm9_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm9_nombrearchivo VARCHAR(200) NOT NULL,
    datocurdservm9_valor VARCHAR(20) NOT NULL,
    datocrudservm9_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm10
CREATE TABLE datocrudoservidorm10 (
    datocrudservm10_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm10_fecha DATE NOT NULL,
    datocrudservm10_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm10_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm10_valor VARCHAR(20) NOT NULL,
    datocrudservm10_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm11
CREATE TABLE datocrudoservidorm11 (
    datocrudservm11_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm11_fecha DATE NOT NULL,
    datocrudservm11_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm11_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm11_valor VARCHAR(20) NOT NULL,
    datocrudservm11_estado VARCHAR(10) NOT NULL
);

--tabla datocrudoservidorm12
CREATE TABLE datocrudoservidorm12 (
    datocrudservm12_id VARCHAR(200),
    esta_id INTEGER REFERENCES estacion(esta_id) NOT NULL,
    sens_id INTEGER REFERENCES sensores(sens_id) NOT NULL,
    variserv_id INTEGER REFERENCES variableservidor(variserv_id) NOT NULL,
    datocrudservm12_fecha DATE NOT NULL,
    datocrudservm12_hora TIME WITHOUT TIME ZONE NOT NULL,
    datocrudservm12_nombrearchivo VARCHAR(200) NOT NULL,
    datocrudservm12_valor VARCHAR(20) NOT NULL,
    datocrudservm12_estado VARCHAR(10) NOT NULL
);

--tabla mantenimiento
CREATE TABLE mantenimiento(
    id_mantenimiento SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    detalle TEXT NOT NULL,
    imagen VARCHAR(100) NOT NULL
);

--tabla equipo
CREATE TABLE equipo(
    id_miembro SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    foto VARCHAR(100) NOT NULL
);

--tabla mapas
CREATE TABLE mapas(
    id_mapa SERIAL PRIMARY KEY,
    anio INT NOT NULL,
    mes VARCHAR(20) NOT NULL,
    num_mes INT NOT NULL,
    descripcion VARCHAR(150),
    imagen VARCHAR(100) NOT NULL
);

--tabla noticias
CREATE TABLE noticias(
    id_noticia SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    imagen VARCHAR(100) NOT NULL
);

--tabla admins
CREATE TABLE admins(
    id_admin SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);


Insercion de datos pruebas

-- Inserción en la tabla provincia
INSERT INTO provincia (prov_nombre) VALUES
    ('Provincia A'),
    ('Provincia B');

-- Inserción en la tabla canton
INSERT INTO canton (prov_id, cant_nombre) VALUES
    (1, 'Canton 1A'),
    (1, 'Canton 2A');

-- Inserción en la tabla parroquia
INSERT INTO parroquia (cant_id, parr_nombre, parr_tipo) VALUES
    (1, 'Parroquia 1A', 'Tipo A'),
    (2, 'Parroquia 2A', 'Tipo B');

-- Inserción en la tabla comunidad
INSERT INTO comunidad (parr_id, comu_nombre) VALUES
    (1, 'Comunidad 1A'),
    (2, 'Comunidad 2A');

-- Inserción en la tabla tipoestacion
INSERT INTO tipoestacion (tipoesta_nombre) VALUES
    ('Tipo Estación A'),
    ('Tipo Estación B');

-- Inserción en la tabla estacion
INSERT INTO estacion (comu_id, tipoesta_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud, esta_alturaterreno, esta_propietarioterreno, esta_propietarioinstitucion, esta_institucionacargo, esta_manualautomatica) VALUES
    (1, 1, 'Estación 1A', 'Ubicación 1A', 0.0, 0.0, 'Altura 1A', 'Propietario Terreno 1A', 'Propietario Institución 1A', 'Institución a Cargo 1A', 'Imagen1.jpg'),
    (2, 2, 'Estación 2A', 'Ubicación 2A', 0.0, 0.0, 'Altura 2A', 'Propietario Terreno 2A', 'Propietario Institución 2A', 'Institución a Cargo 2A', 'Imagen1.jpg');

-- Inserción en la tabla observacionestacion
INSERT INTO observacionestacion (esta_id, obseesta_descripcion, obseesta_fecha) VALUES
    (1, 'Observación 1A', '2024-01-31'),
    (2, 'Observación 2A', '2024-01-31');

-- Inserción en la tabla marca
INSERT INTO marca (marc_nombre) VALUES
    ('Marca A'),
    ('Marca B');

-- Inserción en la tabla sensores
INSERT INTO sensores (esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado) VALUES
    (1, 1, 'Sensor 1A', 'Modelo 1A', 'Serie 1A', 'Activo', 'Imagen1.jpg'),
    (2, 2, 'Sensor 2A', 'Modelo 2A', 'Serie 2A', 'Inactivo', 'Imagen2.jpg');

-- Inserción en la tabla observacionsensores
INSERT INTO observacionsensores (sens_id, obsesens_descripcion, obsesens_fecha) VALUES
    (1, 'Observación Sensor 1A', '2024-01-31'),
    (2, 'Observación Sensor 2A', '2024-01-31');

-- Inserción en la tabla sens_varidata
INSERT INTO sens_varidata (sens_id, varidata_id) VALUES
    (1, 1),
    (2, 2);

-- Inserción en la tabla unidadmedida
INSERT INTO unidadmedida (unidmed_simbolo, unidmed_descripcion) VALUES
    ('Simbolo A', 'Descripción A'),
    ('Simbolo B', 'Descripción B');

-- Inserción en la tabla variabledataloger
INSERT INTO variabledataloger (unidmedi_id, varidata_id_nombre, varidata_id_abreviatura) VALUES
    (1, 'Variable 1A', 'Abreviatura 1A'),
    (2, 'Variable 2A', 'Abreviatura 2A');

-- Inserción en la tabla variableservidor
INSERT INTO variableservidor (unidmedi_id, variserv_nombre, variserv_abreviatura) VALUES
    (1, 'Variable Servidor 1A', 'Abreviatura Servidor 1A'),
    (2, 'Variable Servidor 2A', 'Abreviatura Servidor 2A');

-- Inserción en la tabla sens_variserv
INSERT INTO sens_variserv (sens_id, variserv_id) VALUES
    (1, 1),
    (2, 2);

-- Inserción en la tabla datocrudoservidorm1
INSERT INTO datocrudoservidorm1 (esta_id, sens_id, variserv_id, datocrudservm1_fecha, datocrudservm1_hora, datocrudservm1_nombrearchivo, datocrudservm1_valor, datocrudservm1_estado) VALUES
    (1, 1, 1, '2024-01-31', '12:00:00', 'Archivo 1A', '13.88','VALID'),
    (2, 2, 2, '2024-01-31', '12:00:00', 'Archivo 2A', '13.58','VALID');

-- Inserción en la tabla datocrudoservidorm2
INSERT INTO datocrudoservidorm2 (esta_id, sens_id, variserv_id, datocrudservm2_fecha, datocrudservm2_hora, datocrudservm2_nombrearchivo, datocrudservm2_valor, datocrudservm2_estado) VALUES
    (1, 1, 1, '2024-01-31', '12:00:00', 'Archivo 1A', '23.9','VALID'),
    (2, 2, 2, '2024-01-31', '12:00:00', 'Archivo 2A', '13.08','VALID');

-- Inserción en la tabla mantenimiento
INSERT INTO mantenimiento (nombre, descripcion, detalle, imagen) VALUES
    ('Mantenimiento 1', 'Descripción 1', 'Detalle 1', 'Imagen1.jpg'),
    ('Mantenimiento 2', 'Descripción 2', 'Detalle 2', 'Imagen2.jpg');

-- Inserción en la tabla equipo
INSERT INTO equipo (nombre, cargo, correo, foto) VALUES
    ('Miembro 1', 'Cargo 1', 'correo1@example.com', 'Foto1.jpg'),
    ('Miembro 2', 'Cargo 2', 'correo2@example.com', 'Foto2.jpg');

-- Inserción en la tabla mapas
INSERT INTO mapas (anio, mes, num_mes, descripcion, imagen) VALUES
    (2024, 'Enero', 1, 'Descripción Mapa 1', 'Mapa1.jpg'),
    (2024, 'Febrero', 2, 'Descripción Mapa 2', 'Mapa2.jpg');

-- Inserción en la tabla noticias
INSERT INTO noticias (titulo, contenido, fecha, imagen) VALUES
    ('Noticia 1', 'Contenido Noticia 1', '2024-01-31 10:00:00', 'Imagen1.jpg'),
    ('Noticia 2', 'Contenido Noticia 2', '2024-01-31 11:00:00', 'Imagen2.jpg');

-- Inserción en la tabla admins
INSERT INTO admins (nombre, contrasena) VALUES
    ('Admin 1', 'contraseña1'),
    ('Admin 2', 'contraseña2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const ProcesarCSV = require('./modules/extras/ProcesarCSV'); // Importa el módulo ProcesarCSV.js

const app = express();
const port = 3500;

// Configura cors y bodyParser
app.use(cors());
app.use(bodyParser.json());

// Importar las rutas de los módulos creados
const adminsRoutes = require('./modules/admins/routes/adminsRoutes');
const equipoRoutes = require('./modules/equipo/routes/equipoRoutes');
const mantenimientoRoutes = require('./modules/mantenimiento/routes/mantenimientoRoutes');
const mapasRoutes = require('./modules/mapas/routes/mapasRoutes');
const noticiasRoutes = require('./modules/noticias/routes/noticiasRoutes');
const provinciaRoutes = require('./modules/provincia/routes/provinciaRoutes');
const cantonRoutes = require('./modules/canton/routes/cantonRoutes');
const parroquiaRoutes = require('./modules/parroquia/routes/parroquiaRoutes');
const comunidadRoutes = require('./modules/comunidad/routes/comunidadRoutes');
const tipoestacionRoutes = require('./modules/tipoestacion/routes/tipoestacionRoutes');
const estacionRoutes = require('./modules/estacion/routes/estacionRoutes');
const observacionestacionRoutes = require('./modules/observacionestacion/routes/observacionestacionRoutes');
const marcaRoutes = require('./modules/marca/routes/marcaRoutes');
const sensoresRoutes = require('./modules/sensores/routes/sensoresRoutes');
const observacionsensoresRoutes = require('./modules/observacionsensores/routes/observacionsensoresRoutes');
const sens_varidataRoutes = require('./modules/sens_varidata/routes/sens_varidataRoutes');
const unidadmedidaRoutes = require('./modules/unidadmedida/routes/unidadmedidaRoutes');
const variabledataloggerRoutes = require('./modules/variabledatalogger/routes/variabledataloggerRoutes');
const variableservidorRoutes = require('./modules/variableservidor/routes/variableservidorRoutes');
const sens_variservRoutes = require('./modules/sens_variserv/routes/sens_variservRoutes');
const abreviaturasRoutes = require('./modules/abreviaturas/routes/abreviaturasRoutes');
const abreviaturasdatalogerRoutes = require('./modules/abreviaturasdataloger/routes/abreviaturasdatalogerRoutes');
const FDatoCrudoDatalogerM1Routes = require('./modules/funciones/FDatoCrudoDatalogerM1');
const FDatoCrudoDatalogerM2Routes = require('./modules/funciones/FDatoCrudoDatalogerM2');
const FDatoCrudoDatalogerM3Routes = require('./modules/funciones/FDatoCrudoDatalogerM3');
const FDatoCrudoDatalogerM4Routes = require('./modules/funciones/FDatoCrudoDatalogerM4');
const FDatoCrudoDatalogerM5Routes = require('./modules/funciones/FDatoCrudoDatalogerM5');
const FDatoCrudoDatalogerM6Routes = require('./modules/funciones/FDatoCrudoDatalogerM6');
const FDatoCrudoDatalogerM7Routes = require('./modules/funciones/FDatoCrudoDatalogerM7');
const FDatoCrudoDatalogerM8Routes = require('./modules/funciones/FDatoCrudoDatalogerM8');
const FDatoCrudoDatalogerM9Routes = require('./modules/funciones/FDatoCrudoDatalogerM9');
const FDatoCrudoDatalogerM10Routes = require('./modules/funciones/FDatoCrudoDatalogerM10');
const FDatoCrudoDatalogerM11Routes = require('./modules/funciones/FDatoCrudoDatalogerM11');
const FDatoCrudoDatalogerM12Routes = require('./modules/funciones/FDatoCrudoDatalogerM12');

// Usar las rutas de los módulos
app.use('/api', adminsRoutes);
app.use('/api', equipoRoutes);
app.use('/api', mantenimientoRoutes);
app.use('/api', mapasRoutes);
app.use('/api', noticiasRoutes);
app.use('/api', provinciaRoutes);
app.use('/api', cantonRoutes);
app.use('/api', parroquiaRoutes);
app.use('/api', comunidadRoutes);
app.use('/api', tipoestacionRoutes);
app.use('/api', estacionRoutes);
app.use('/api', observacionestacionRoutes);
app.use('/api', marcaRoutes);
app.use('/api', sensoresRoutes);
app.use('/api', observacionsensoresRoutes);
app.use('/api', sens_varidataRoutes);
app.use('/api', unidadmedidaRoutes);
app.use('/api', variabledataloggerRoutes);
app.use('/api', variableservidorRoutes);
app.use('/api', sens_variservRoutes);
app.use('/api', abreviaturasRoutes);
app.use('/api', abreviaturasdatalogerRoutes);
app.use('/api', FDatoCrudoDatalogerM1Routes);
app.use('/api', FDatoCrudoDatalogerM2Routes);
app.use('/api', FDatoCrudoDatalogerM3Routes);
app.use('/api', FDatoCrudoDatalogerM4Routes);
app.use('/api', FDatoCrudoDatalogerM5Routes);
app.use('/api', FDatoCrudoDatalogerM6Routes);
app.use('/api', FDatoCrudoDatalogerM7Routes);
app.use('/api', FDatoCrudoDatalogerM8Routes);
app.use('/api', FDatoCrudoDatalogerM9Routes);
app.use('/api', FDatoCrudoDatalogerM10Routes);
app.use('/api', FDatoCrudoDatalogerM11Routes);
app.use('/api', FDatoCrudoDatalogerM12Routes);

// Endpoint para cargar un archivo CSV y procesarlo
app.post('/api/cargar-csv', async (req, res) => {
    const { estacion, pathfile } = req.body; // Suponiendo que recibes el id de la estación y la ruta del archivo en el body

    try {
        const resultado = await ProcesarCSV.procesarArchivoCSV(estacion, pathfile); // Llama a la función para procesar el archivo CSV
        if (resultado) {
            res.status(200).send('Archivo CSV procesado correctamente.');
        } else {
            res.status(500).send('Error al procesar el archivo CSV.');
        }
    } catch (error) {
        console.error('Error al procesar el archivo CSV:', error);
        res.status(500).send('Error interno del servidor.');
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exportar 'app' para que pueda ser utilizado en otros archivos
module.exports = app;

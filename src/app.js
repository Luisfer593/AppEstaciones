// /src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const ProcesarCSV = require('./modules/extras/ProcesarCSV'); // Importa el módulo ProcesarCSV.js

// Importar las funciones y clases necesarias de los nuevos archivos creados
const {
    GeneraCodigoDL,
    NoExisteCodigoDatoCrudoDL,
    InsertarDatoDL,
    GetStringFecha,
    GetStringHora,
    ConvertirFormatoFecha,
    ConvertirFormatoHora24,
    ObtenerIdVariablesByAbreviatura,
    ObtenerSensorId,
    getListaSensores
} = require('./modules/extras/FuncionesExtras');

// Importar las rutas de los nuevos archivos creados

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
const unidadmedidaRoutes = require('./modules/unidadmedida/routes/unidadmedidaRoutes');
const variabledataloggerRoutes = require('./modules/variabledatalogger/routes/variabledataloggerRoutes');
const variableservidorRoutes = require('./modules/variableservidor/routes/variableservidorRoutes');
const sens_variservRoutes = require('./modules/sens_variserv/routes/sens_variservRoutes');
const abreviaturasRoutes = require('./modules/abreviaturas/routes/abreviaturasRoutes');
//const AbreviaturasDataloger = require('./modules/abreviaturasdataloger/AbreviaturasDataloger');

const app = express();
const port = 3500;

// Configura cors y bodyParser
app.use(cors());
app.use(bodyParser.json());

// Importar las rutas de los módulos creados
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
app.use('/api', unidadmedidaRoutes);
app.use('/api', variabledataloggerRoutes);
app.use('/api', variableservidorRoutes);
app.use('/api', sens_variservRoutes);
app.use('/api', abreviaturasRoutes);

// Endpoint para cargar un archivo CSV y procesarlo
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Directorio donde se almacenarán los archivos

app.post('/api/cargar-csv', upload.single('file'), async (req, res) => {
    console.log('Datos recibidos en el backend:', { estacion: req.body.estacion, archivo: req.file });

    const { estacion } = req.body;
    const archivoPath = req.file.path; // Obtén la ruta del archivo subido

    if (!estacion || !archivoPath) {
        res.status(400).send('Datos insuficientes: se requiere el id de la estación y la ruta del archivo.');
        return;
    }

    try {
        // Aquí procesa el archivo CSV utilizando la función del módulo ProcesarCSV
        const resultado = await ProcesarCSV.procesarArchivoCSV(estacion, archivoPath);
        // Mostrar el contenido del archivo CSV en la consola
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


const { obtenerEstaciones } = require('./modules/estacion/models/estacionModel');
// Endpoint para obtener las estaciones
app.get('/api/estacion', async (req, res) => {
    try {
        const estaciones = await obtenerEstaciones();
        res.status(200).json(estaciones);
    } catch (error) {
        console.error('Error al obtener las estaciones:', error);
        res.status(500).send('Error interno del servidor.');
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exportar 'app' para que pueda ser utilizado en otros archivos
module.exports = app;
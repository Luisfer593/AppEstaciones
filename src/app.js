// /src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const ProcesarCSV = require('./modules/extras/ProcesarCSV');

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

const app = express();
const port = 4000;

// Configura cors
app.use(cors());
app.use(bodyParser.json());
// Configurar multer para manejar archivos multipart/form-data
const upload = multer();

// Usar las rutas del router adminsRoutes
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
// Usa las rutas del módulo estacionRoutes
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
// Usa las rutas del módulo FDatoCrudoDatalogerM12
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

// Ruta para cargar datos desde un archivo CSV
app.post('/api/cargar-datos-csv', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se ha proporcionado ningún archivo CSV' });
  }

  const pathfile = req.file.path; // Obtener la ruta del archivo temporal

  // Procesar el archivo CSV y devolver la respuesta
  const success = ProcesarCSV.procesarArchivoCSV(req.body.estacion, pathfile);
  if (success) {
    res.status(200).json({ message: 'Datos del archivo CSV procesados y guardados correctamente' });
  } else {
    res.status(500).json({ error: 'Error al procesar y guardar los datos del archivo CSV' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exporta 'upload' para que pueda ser utilizado en otros archivos
module.exports = { app, upload };

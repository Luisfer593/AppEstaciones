// /src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
const sensVaridataRoutes = require('./modules/sens_varidata/routes/sensVaridataRoutes');
const unidadmedidaRoutes = require('./modules/unidadmedida/routes/unidadmedidaRoutes');
const variabledatalogerRoutes = require('./modules/variabledataloger/routes/variabledatalogerRoutes');
const variableservidorRoutes = require('./modules/variableservidor/routes/variableservidorRoutes');
const sens_variservRoutes = require('./modules/sens_variserv/routes/sens_variservRoutes');
const datocrudoservidorm1Routes = require('./modules/datocrudoservidorm1/routes/datocrudoservidorm1Routes');

const app = express();
const port = 4000;

// Configura cors
app.use(cors());
app.use(bodyParser.json());

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
app.use('/api', estacionRoutes);
app.use('/api', observacionestacionRoutes);
app.use('/api', marcaRoutes);
app.use('/api', sensoresRoutes);
app.use('/api', observacionsensoresRoutes);
app.use('/api', sensVaridataRoutes);
app.use('/api', unidadmedidaRoutes);
app.use('/api', variabledatalogerRoutes);
app.use('/api', variableservidorRoutes);
app.use('/api', sens_variservRoutes);
app.use('/api', datocrudoservidorm1Routes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


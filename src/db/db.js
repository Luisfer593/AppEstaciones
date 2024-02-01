// /db/db.js

const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'dbestaciones',
  password: process.env.DB_PASSWORD || '12345',
  port: process.env.DB_PORT || 5151,
});

// Exportar el objeto 'pool' para ser utilizado en otros archivos
module.exports = pool;


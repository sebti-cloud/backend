process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Désactive la vérification SSL

import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true, // Active SSL sans vérification du certificat
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('Erreur de connexion', err);
  else console.log('Connexion réussie', res.rows);
  pool.end();
});

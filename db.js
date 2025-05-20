const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Obligatoire pour Railway
});

client.connect().catch(err => console.error('Connection error', err.stack));

module.exports = client;

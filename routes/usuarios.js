const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { nombre, correo } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
      [nombre, correo]
    );
    res.json({ id: result.insertId, nombre, correo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

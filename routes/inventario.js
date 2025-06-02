const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM inventario");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { nombre, cantidad, precio } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO inventario (nombre, cantidad, precio) VALUES (?, ?, ?)",
      [nombre, cantidad, precio]
    );
    res.json({ id: result.insertId, nombre, cantidad, precio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

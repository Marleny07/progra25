const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pagos");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { id_factura, monto, fecha } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO pagos (id_factura, monto, fecha) VALUES (?, ?, ?)",
      [id_factura, monto, fecha]
    );
    res.json({ id: result.insertId, id_factura, monto, fecha });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

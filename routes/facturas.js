const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM facturas");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { cliente, total } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO facturas (cliente, total) VALUES (?, ?)",
      [cliente, total]
    );
    res.json({ id: result.insertId, cliente, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

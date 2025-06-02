require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/facturas', require('./routes/facturas'));
app.use('/inventario', require('./routes/inventario'));
app.use('/pagos', require('./routes/pagos'));
app.use('/usuarios', require('./routes/usuarios'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

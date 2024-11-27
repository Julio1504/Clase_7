const express = require('express');
const UserController = require('../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3001, () => console.log('Servidor escuchando en http://localhost:3001'));
import express from 'express';
import lugarRoutes from './rutas/lugar.routes.js';


const app = express();

app.use(express.json());

app.use('/lugares', lugarRoutes);

app.listen(3000, "192.168.100.8");

console.log('Server running on http://localhost:3000');
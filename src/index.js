import express from 'express';
import userRoutes from './rutas/user.routes.js';
import applianceRoutes from './rutas/appliance.route.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/appliances', applianceRoutes);

app.listen(3000);

console.log('Server running on http://localhost:3000');
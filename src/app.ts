import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { AuthenticationHandler } from './middleware/AuthenticationHandler';
import { CartController } from './controller/CartController';

const app = express();
app.use(helmet());
app.use(cors());

app.use(AuthenticationHandler);
app.use('/api/cart', CartController)

export default app;
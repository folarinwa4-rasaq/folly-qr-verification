import { Router } from 'express';
import { home, scanneer, form, create_products } from './view.js'

export const routes = new Router();

routes.get('/', home)
routes.get('/scanneer', scanneer)
routes.get('/create_products', create_products)
routes.post('/api/form', form)
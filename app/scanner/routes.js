import { Router } from 'express';
import { home, scanner } from '.views.js'

const routes = new Router();

routes.get('/', home)
routes.get('/scanner', scanner)
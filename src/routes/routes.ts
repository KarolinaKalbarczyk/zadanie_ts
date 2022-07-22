import { Router } from 'express';
import { getAllData, getFirstData, getSecondData } from "../controllers/controllers"
import { db } from '../db';

const routes = Router();

// routes.get('/', (req, res) => {
//   return res.json({ message: 'połaczenie!' });
// });

routes.get('/', getAllData);

routes.get('/1', getFirstData);

routes.get('/2', getSecondData);



export default routes;
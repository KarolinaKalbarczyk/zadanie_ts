import { Router } from 'express';
import { getData } from "../controllers/controllers"

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'połaczenie!' });
});

routes.get('/1', getData);


// routes.get('/1', (req, res) => {
//     res.send("123 test")
//     //return res.json({ message: '123 test 2' });
//   });

export default routes;
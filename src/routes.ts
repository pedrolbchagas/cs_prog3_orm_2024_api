import {Router} from 'express';
import JogadorController from './app/controllers/JogadorController'
const router = Router();

router.post('/jogadores', JogadorController.store);
export default router;

import express from 'express';
import OptimalController from '../controllers/optimal.js';

const router = express.Router();

router.get('/optimal', OptimalController.getOptimal);

export default router;

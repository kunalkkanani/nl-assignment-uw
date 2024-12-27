import express from 'express';
import SalesRepController from '../controllers/salesRep.js';

const router = express.Router();

router.get('/salesrep', SalesRepController.getSalesRep);

export default router;

import express from 'express';
import CountryController from '../controllers/country.js';

const router = express.Router();

router.get('/countries', CountryController.getCountries);

export default router;

import express from 'express';
import { apiResponse } from '../utils/response.js';
import { fetchCountries } from '../models/countryModel.js';

const router = express.Router();

router.get('/countries', async (req, res) => {
  try {
    const { region } = req.query;
    const query = region ? { region } : {};
    const countries = await fetchCountries(query);
    return apiResponse.success(res, countries);
  } catch (error) {
    return apiResponse.error(res, error.message);
  }
});

export default router;

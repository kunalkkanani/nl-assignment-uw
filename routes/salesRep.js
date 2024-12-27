import express from 'express';
import { apiResponse } from '../utils/response.js';
import { prepareCountryByRegion } from '../utils/helper.js';
import { fetchCountries } from '../models/countryModel.js';

const router = express.Router();

router.get('/salesrep', async (req, res) => {
  try {
    const countries = await fetchCountries();
    const regions = prepareCountryByRegion(countries, 'region');
    const salesRepData = Object.keys(regions).map((region) => {
      const countryCount = regions[region].length;
      return {
        region,
        minSalesReq: Math.ceil(countryCount / 7),
        maxSalesReq: Math.ceil(countryCount / 3),
      };
    });
    return apiResponse.success(res, salesRepData);
  } catch (error) {
    return apiResponse.error(res, error.message);
  }
});

export default router;

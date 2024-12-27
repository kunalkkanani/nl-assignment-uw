import { apiResponse } from '../utils/response.js';
import { fetchCountries } from '../models/countryModel.js';

const getOptimal = async (req, res) => {
  try {
    const countries = await fetchCountries();
    // todo
    return apiResponse.success(res, countries);
  } catch (error) {
    return apiResponse.error(res, error.message);
  }
};

export default { getOptimal };

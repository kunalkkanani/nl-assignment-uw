import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: String,
  region: String,
});

export const Country = mongoose.model('Country', countrySchema);

export const fetchCountries = async (filter = {}) => {
  return await Country.find(filter).select('name region -_id');
};

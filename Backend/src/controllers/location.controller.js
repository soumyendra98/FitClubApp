const Location = require('../models/location.model');

const getAll = async (req, res) => {
  try {
    const result = await Location.find();
    return res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
const createNew = async (req, res) => {
  try {
    const result = await Location.create(req.body);
    return res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getAll,
  createNew,
};

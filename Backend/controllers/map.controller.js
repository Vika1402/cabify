const { validationResult } = require("express-validator");
const mapServices = require("../services/map.service");

module.exports.getMap = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { address } = req.query;
    const cordinates = await getAddessCordinates(address);
    res.status(200).json(cordinates);
  } catch (error) {
    res.status(404).json({ message: "Cordinates not found" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  if (!origin || !destination) {
    return res
      .status(400)
      .json({ error: "Origin and destination are required" });
  }
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { origin, destination } = req.query;
    const response = await mapServices.getDistanceTime(origin, destination);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: "Unable to fetch distance and time" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { input } = req.query;
    const response = await mapServices.getAutoComplete(input);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: "Unable to fetch suggestions" });
  }
};

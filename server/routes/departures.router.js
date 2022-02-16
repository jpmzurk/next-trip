const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = "../constants/apiConfig.js";

router.get("/:route/:direction/:stop", async (req, res) => {
  try {
    const { route, direction, stop } = req.params;

    const response = await axios.get(
      `http://svc.metrotransit.org/NexTrip/${route}/${direction}/${stop}`,
      apiConfig
    );

    res.send(response.data);
  } catch (error) {
    console.log(`error in get stops routes request`);
  }
});

module.exports = router;

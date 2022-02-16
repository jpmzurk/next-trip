const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = "../constants/apiConfig.js";

router.get("/:route/:direction/:stop", async (req, res) => {
  try {
    const { route, direction, stop } = req.params;

    const responseOne = await axios.get(
      `http://svc.metrotransit.org/NexTrip/${route}/${direction}/${stop}`,
      apiConfig
    );

    const responseTwo = await axios.get(
      `http://svc.metrotransit.org/NexTrip/StopID/${route}/${direction}/${stop}`,
      apiConfig
    );

    // console.log('responseOne', responseOne.data);
    // console.log('responseTwo', responseTwo.data);

    const departureData = [...responseOne.data, responseTwo.data];
    
    res.send(departureData);
  } catch (error) {
    console.log(`error in get departures routes request ${error}`);
  }
});

module.exports = router;

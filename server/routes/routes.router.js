const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = '../constants/apiConfig.js'


router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "http://svc.metrotransit.org/NexTrip/Routes",
      apiConfig
    );

    res.send(response.data);
  } catch (error) {
    console.log(`error in get tranist routes request`);
  }
});



module.exports = router;

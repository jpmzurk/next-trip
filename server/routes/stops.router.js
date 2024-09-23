const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = "../constants/apiConfig.js";

router.get("/:route/:direction", async (req, res) => {
  try {
    const { route, direction } = req.params;

    const response = await axios.get(
      `http://svc.metrotransit.org/nextrip/Stops/${route}/${direction}`,
      apiConfig
    );
    res.send(response.data);
  } catch (error) {
    console.log(`error in get stops routes request: ${error}`);
  }
});

module.exports = router;

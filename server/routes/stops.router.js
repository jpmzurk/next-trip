const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = {
  headers: { "Content-type": "application/json" },
};

router.get("/:route/:direction", async (req, res) => {
  try {
    const { route, direction } = req.params;

    const response = await axios.get(
      `http://svc.metrotransit.org/NexTrip/Stops/${route}/${direction}`,
      apiConfig
    );

    res.send(response.data);
  } catch (error) {
    console.log(`error in get stops routes request`);
  }
});

module.exports = router;

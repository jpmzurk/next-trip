const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = {
  headers: { "Content-type": "application/json" },
};

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "http://svc.metrotransit.org/NexTrip/Routes",
      apiConfig
    );
    const metroRoutes = response.data.filter(
      (route) => route.ProviderID === "0"
    );

    res.send(metroRoutes);
  } catch (error) {
    console.log(`error in get tranist routes request`);
  }
});



module.exports = router;

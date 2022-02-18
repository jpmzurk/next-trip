const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiConfig = "../constants/apiConfig.js";

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `http://svc.metrotransit.org/NexTrip/Directions/${id}`,
      apiConfig
    );

    res.send(response.data);
  } catch (error) {
    console.log(`error in get directions routes request`);
  }
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/whoami", (req, res, next) => {
  const software = req.get("User-Agent");
  const langHeader = req.get("Accept-Language");
  const ipaddress = req.ip;

  const language = langHeader || "N/A";
  res.status(200).json({ software, language, ipaddress });
});

module.exports = router;

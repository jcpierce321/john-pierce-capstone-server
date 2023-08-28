const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8080;

router.get("/", async (_req, res) => {
    console.log("Accessing /users route")
    try {
      const users = await knex("users");
  
      res.status(200).json(users);
    } catch (error) {
      console.error("Error retrieving users", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  module.exports = router;
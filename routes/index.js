const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const express = require("express");
const router = express.Router();

const usersRoutes = require("./users");
console.log("Setting up /users route")
router.use("/users", usersRoutes);

// const instrumentsRoutes = require("./instruments");
// router.use("/instruments", instrumentsRoutes);

router.get("/", async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "This is home!" });
});

module.exports = router;
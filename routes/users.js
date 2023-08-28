const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8080;

router.get("/", async (_req, res) => {
    try {
      const users = await knex("users");
  
      res.status(200).json(users);
    } catch (error) {
      console.error("Error retrieving users", error);
      res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/:id", async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await knex("users").where("user_id", userId).first();

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error retrieving user", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/', async (req, res) => {
    try {
      const {
        name,
        email,
        telephone,
        city,
        website_url,
        primary_inst 
    } = req.body;
  
      if (
        !name ||
        !email ||
        !telephone ||
        !city ||
        !website_url ||
        !primary_inst) {

        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const newUser = {
        name,
        email,
        telephone,
        city,
        website_url,
        primary_inst
      };
  
    //   const userIds = await knex('users').insert(newUser);
  
    //   if (userIds.length === 0) {
    //     return res.status(500).json({ error: 'Failed to create user' });
    //   }
  
    //   const userId = userIds[0];
    //   newUser.id = userId;
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/instruments', async (req, res) => {
    try {
        const {
            user_id,
            flute,
            piccolo,
            oboe,
            bassoon,
            clarinetBb,
            clarinetEb,
            saxAlto,
            saxTenor,
            saxBaritone 
        } = req.body;

        const instrumentData = {
            user_id,
            flute: flute === 'true',
            piccolo: piccolo === 'true',
            oboe: oboe === 'true',
            bassoon: bassoon === 'true',
            clarinetBb: clarinetBb === 'true',
            clarinetEb: clarinetEb === 'true',
            saxAlto: saxAlto === 'true',
            saxTenor: saxTenor === 'true',
            saxBaritone: saxBaritone === 'true'
        };

        const instrumentIds = await knex('instruments').insert(instrumentData);

        if (instrumentIds.length === 0) {
            return res.status(500).json({ error: 'Failed to create instrument'});
        }

        const instrumentId = instrumentIds[0];
        instrumentData.id = instrumentId;

        res.status(201).json(instrumentData);
    } catch (error) {
        console.error('Error creating instrument', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
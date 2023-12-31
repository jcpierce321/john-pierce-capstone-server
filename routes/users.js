const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const instrumentMapping = {
  'Flute': 'flute',
  'Piccolo': 'piccolo',
  'Oboe': 'oboe',
  'Bassoon': 'bassoon',
  'B-flat clarinet': 'clarinetBb',
  'E-flat clarinet': 'clarinetEb',
  'Alto saxophone': 'saxAlto',
  'Tenor saxophone': 'saxTenor',
  'Baritone saxophone': 'saxBaritone',
};

router.get("/", async (_req, res) => {
    try {
      const users = await knex("users");
  
      res.status(200).json(users);
    } catch (error) {
      console.error("Error retrieving users", error);
      res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/search", async (req, res) => {
  try {
      const { instruments, primary_inst } = req.query;

      if (typeof instruments === 'string') {
        instruments = [instruments];
      }

      const validInstrumentArray = instruments.map(instrument => {
        return instrumentMapping[instrument] || instrument;
      });

      let query = knex('users');

      for (const instrument of validInstrumentArray) {
          query = query.where(instrument, true);
      }

      if (primary_inst) {
        query = query.where('primary_inst', primary_inst);
      }

      const users = await query.select();

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
        primary_inst,
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
        primary_inst,
        flute,
        piccolo,
        oboe,
        bassoon,
        clarinetBb,
        clarinetEb,
        saxAlto,
        saxTenor,
        saxBaritone,
      };

      const userIds = await knex('users').insert(newUser);

      if (userIds.length === 0) {
        return res.addTrailers.status(500).json({ error: 'Failed to create user' });
      }

      const userId = userIds[0];
      newUser.user_id = userId;
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
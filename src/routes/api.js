const API_BASE = "/api"
const db = require('../db');

module.exports = (app) => {
   app.get(`${API_BASE}/artlist`, async (req, res) => {
      const response = await db.getArtList();
      res.json(response);
   });

   app.get(`${API_BASE}/artlist/:id`, async (req, res) => {
      const response = await db.getArtListById(req.params.id);
      res.json(response);
   });
};

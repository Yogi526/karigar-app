
const router = require('express').Router();
const Worker = require('../models/Worker');

// Sabhi workers list
router.get('/', async (req, res) => {
  try {
    const { category, area } = req.query;
    let filter = {};
    if (category) filter.category = category;
    if (area) filter.area = area;
    const workers = await Worker.find(filter);
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Worker profile
router.get('/:id', async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    res.json(worker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Worker register
router.post('/', async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.json(worker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

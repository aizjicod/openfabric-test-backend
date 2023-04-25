var express = require('express');
var router = express.Router();
var Tool = require('../model/tools')

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const tools = await Tool.find({});
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// Show tools
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const tool = await Tool.findById(id);
    res.status(200).json(tool);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Edit tools
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const tool = await Tool.findByIdAndUpdate(id, req.body);
    if(!tool){
      return res.status(402).json({message: `cannot find tool by that id: ${id}`});
    }
    const updatedTool = await Tool.findById(id);
    res.status(200).json(updatedTool);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

/* Post home page */
router.post('/new', async function (req, res, next) {
  try {
    const product = await Tool.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;

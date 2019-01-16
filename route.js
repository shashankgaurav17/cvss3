const express = require('express');
const router = express.Router();
import { social_templates } from "./config-template";

/**
 * Social
 */
router.post('/social', (req, res) => {
  const template = social_templates.find(template => template.template_id === req.body.data.template)
  res.render(template.template_file, req.body.data)
})
console.log('here')
module.exports = router;

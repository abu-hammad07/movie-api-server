const express = require('express');
const router = express.Router();

// Dummy example — you can later connect to a Genre model if needed
router.get('/', (req, res) => {
  res.json([
    { name: 'Action' },
    { name: 'Comedy' },
    { name: 'Drama' },
    { name: 'Sci-Fi' }
  ]);
});

module.exports = router;

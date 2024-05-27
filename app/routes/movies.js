const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, movieController.getMovies);
router.post('/', authMiddleware, movieController.addMovie);

module.exports = router;

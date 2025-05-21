const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  posterPath: { type: String, required: true },
  backdropPath: { type: String, default: '' },
  year: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  genre: { type: String },
  genres: [{ type: String }],
  language: { type: String },
  description: { type: String },
  director: { type: String },
  cast: [{ type: String }],
  runtime: { type: Number },
  trailerUrl: { type: String },
  tagline: { type: String },
  featured: { type: Boolean, default: false },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', MovieSchema);

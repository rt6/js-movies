import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Movie Schema
 */
const MovieSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true
  },
  //mobileNumber: {
    //type: String,
    //required: true,
    //match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
  //},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
MovieSchema.method({
});

/**
 * Statics
 */
MovieSchema.statics = {
  /**
   * Get movie
   * @param {ObjectId} id - The objectId of movie.
   * @returns {Promise<Movie, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((movie) => {
        if (movie) {
          return movie;
        }
        const err = new APIError('No such movie exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List movies in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of movies to be skipped.
   * @param {number} limit - Limit number of movies to be returned.
   * @returns {Promise<Movie[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Movie
 */
export default mongoose.model('Movie', MovieSchema);

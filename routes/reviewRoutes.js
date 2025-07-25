const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// Protect all routes
router.use(authController.protect);

// Public - get all reviews or property-specific reviews
router.get('/', reviewController.getAllReviews);
router.get('/property/:propertyId', reviewController.getReviewsByProperty);

// Private (tenant only) - create, update, delete
router.post('/', authController.restrictTo('tenant'), reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(authController.restrictTo('tenant'), reviewController.updateReview)
  .delete(authController.restrictTo('tenant'), reviewController.deleteReview);

module.exports = router;

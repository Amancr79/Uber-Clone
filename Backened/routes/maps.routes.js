const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { query } = require("express-validator");
const { getDistanceTime,getCoordinates,getAutoCompleteSuggestions } = require("../controllers/maps.controller");
//this route is expensive we can't open it for all user so we make it available for authenticated user thats why we using authmiddle ware
router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getCoordinates
);

router.get('/get-distance-time',
  query('origin').isString().isLength({min:3}),
  query('destination').isString().isLength({min:3}),
  authMiddleware.authUser,
  getDistanceTime
)

router.get('/get-suggestions',
  query('input').isString().isLength({min:3}),
  authMiddleware.authUser,
  getAutoCompleteSuggestions
)
module.exports = router;

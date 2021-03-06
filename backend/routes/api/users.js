const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const {Land} = require('../../db/models/')
const {Place} = require('../../db/models')

const router = express.Router();
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get(
  '/:userId/lands',
  asyncHandler(async (req, res) =>{
    const userId = req.params.userId;
    const lands = await Land.findAll({
      where: {
        userId
      },
      include: Place
    })
    res.json(lands)
  })
)

router.get(
  '/:userId/places',
  asyncHandler(async (req, res) =>{
    const userId = req.params.userId;
    const places = await Place.findAll({
      where: {
        userId
      },
    })
    res.json(places)
  })
)

module.exports = router;

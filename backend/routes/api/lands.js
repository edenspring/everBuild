const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Land } = require('../../db/models')

const router = express.Router();

router.post(
  '/',
  asyncHandler(async(req, res)=>{
    const {name, description, userId} = req.body;
    const land = await Land.createNew({name, description, userId});
    return res.json({
      land
    })
  })
)

module.exports = router;

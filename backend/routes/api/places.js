const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Place } = require('../../db/models')

const router = express.Router();

router.post(
  '/',
  asyncHandler(async(req, res)=>{
    const {name, description, landId, userId} = req.body;
    const place = await Place.createNew({name, description, landId, userId});
    return res.json(place)
  })
);

router.get(
  '/:placeId',
  asyncHandler(async(req, res)=>{
    const placeId = req.params.placeId;
    const place = await Place.findByPk(placeId);
    res.json(place)
  })
)


module.exports = router;

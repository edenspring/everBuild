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

router.put(
  '/:placeId/edit',
  asyncHandler(async(req, res)=>{
    const id = req.params.placeId;
    const {name, description} = req.body;
    const currentPlace = await Place.findByPk(id);
    currentPlace.name = name;
    currentPlace.description = description;
    await currenPlace.save();
    res.json(currentPlace)
  })
)

router.delete(
  '/:placeId/delete',
  asyncHandler(async(req, res)=>{
    const placeId = req.params.placeId;
    const place = await Place.findByPk(placeId);
    await place.destroy();
    res.json(place);
  })
)


module.exports = router;

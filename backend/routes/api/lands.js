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
    return res.json(land)
  })
)

router.get(
  '/:landId',
  asyncHandler(async(req, res)=>{
    const id = req.params.landId;
    const land = await Land.findByPk(id)
    res.json(land)
  })
)

router.put(
  '/:landId/edit',
  asyncHandler(async(req, res)=>{
    const id = req.params.landId;
    const {name, description} = req.body;
    const currentLand = await Land.findByPk(id);
    currentLand.name = name;
    currentLand.description = description;
    await currentLand.save();
    res.json(currentLand)
  })
)

router.delete(
  '/:landId/delete',
  asyncHandler(async(req, res)=>{
    const id = req.params.landId;
    const landForDeleting = await Land.findByPk(id);
    await landForDeleting.destroy();
    res.json(landForDeleting);
  })
)

module.exports = router;

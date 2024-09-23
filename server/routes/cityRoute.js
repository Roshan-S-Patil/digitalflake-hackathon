import express from 'express'
import { getCities,addCity,editCity,deleteCity } from '../controllers/cityController.js'
const router=express.Router()
router.get('/',getCities)
router.post('/add',addCity)
router.put('/edit',editCity)
router.delete('/delete',deleteCity)


export default router
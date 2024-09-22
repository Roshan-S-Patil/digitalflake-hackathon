import express from 'express'
import { getStates,addstate,editState,deleteState } from '../controllers/stateController.js'
const router=express.Router()
router.get('/',getStates)
router.post('/add',addstate)
router.put('/edit',editState)
router.delete('/delete',deleteState)


export default router
import express from 'express'
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} from '../controllers/user.js'

const router = express.Router()

// create a user
router.post('/', createUser)

// get all users
router.get('/', getUsers)

// get a user
router.get('/:id', getUser)

// update a user
router.put('/:id', updateUser)

// delete a user
router.delete('/:id', deleteUser)

export default router

import express from "express"

import {
  getUserDates,
  createUserDates,
} from "../controllers/userDateController.js"

const router = express.Router()

router.route("/").get(getUserDates).post(createUserDates)

export default router

import asyncHandler from "express-async-handler"
import UserDate from "../models/userDateModel.js"

// @desc Fetch all userdates
// @route GET /api/userdates
// @access Publuc
const getUserDates = asyncHandler(async (req, res) => {
  const userDates = await UserDate.find({})

  console.log('getting')

  res.json(userDates)
})

const createUserDates = asyncHandler(async (req, res) => {
    try {
        const result = []

        for (const element of req.body) {

            const { registrationDate, lastActivityDate } = element

            const userDate = new UserDate({
                registrationDate, lastActivityDate
            })

            const createdDate = await userDate.save()
            result.push(createdDate)
        };

        res.status(201).json({ result })
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
})

export { getUserDates, createUserDates }
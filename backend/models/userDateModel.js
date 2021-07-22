import mongoose from "mongoose"

const userdateSchema = mongoose.Schema({
  registrationDate: {
    type: Date,
    required: true,
  },
  lastActivityDate: {
    type: Date,
    required: true,
  },
})

const UserDate = mongoose.model("UserDate", userdateSchema)

export default UserDate

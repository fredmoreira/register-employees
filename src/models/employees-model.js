import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  nif: {
    type: Number,
    required: 'NIF is required.'
  },
  address: {
    type: String,
  },
}, {
  versionKey: false
})

export default EmployeeSchema;

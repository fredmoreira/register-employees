import mongoose from 'mongoose';

const { Schema } = mongoose;

const employees = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
    },
    nif: {
      type: Number,
      required: 'NIF is required.',
    },
    address: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
);

export default employees;

import mongoose from 'mongoose'

export {
  Label
}

const labelSchema = new mongoose.Schema(
  {
    email: String,
    profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
  },
  {
    timestamps: true,
  }
)

const Label = mongoose.model('Label', labelSchema)

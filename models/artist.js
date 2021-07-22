import mongoose from 'mongoose'

export {
  Artist
}

const artistSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    genre: String,
    yearsActive: Date,
    content: String,
    albums: [albumSchema],
  },
  {
    timestamps: true,
  }
)

const Artist = mongoose.model('Artist', artistSchema)

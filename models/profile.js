import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  location: String,
  bio: String,
  shelf: [{ type: Schema.Types.ObjectId, ref: "Record" }],
  wishlist: String,
  reviewsLeft: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)
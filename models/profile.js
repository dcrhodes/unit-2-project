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
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Record" }],
  reviewsLeft: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)
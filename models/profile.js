import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  location: String,
  bio: String,
  shelf: String,
  wishlist: String,
  reviewsLeft: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)
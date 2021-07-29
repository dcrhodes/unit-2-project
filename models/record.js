import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Record
}

const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {
        type: Number, 
        min: 1, 
        max: 5, 
        required: true
    }
}, {
  timestamps: true
})

const recordSchema = new mongoose.Schema(
  {
    artist: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    cover: String,
    originalYear: {
        type: Number, 
        min: 1889,
    },
    repressYear: {
        type: Date, 
        min: 1889
    },
    label: {
      type: String,
      default: '/Users/damienrhodes/code/sei/projects/unit-2-project/public/images/genericrecord.png'
    },
    genre: String,
    format: {
        type: String, 
        enum: ['12-inch', '10-inch', '7-inch']
    },
    colors: String,
    collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    wishlistBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    reviews: [reviewSchema],
},
  {
    timestamps: true,
  }
)

const Record = mongoose.model('Record', recordSchema)

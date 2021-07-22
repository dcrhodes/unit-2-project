import mongoose from 'mongoose'

export {
  Album
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

const albumSchema = new mongoose.Schema(
  {
    artist: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    originalYear: {
        type: Date, 
        min: 1889
    },
    repressYear: {
        type: Date, 
        min: 1889
    },
    label: String,
    genre: String,
    format: {
        type: String, 
        enum: ['12-inch', '10-inch', '7-inch']
    },
    color: String,
    reviews: [reviewSchema],
},
  {
    timestamps: true,
  }
)

const Album = mongoose.model('Album', albumSchema)

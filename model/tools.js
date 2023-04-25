const mongoose = require('mongoose')

const toolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the tool's name"],
    },
    price: {
      type: Number,
      required: [true, 'please enter the price'],
      min: [0, 'Cannot be a negative number'],
      default: 0
    },
    image: {
      type: String,
      default: 'image deault'
    },
    description: {
      type: String,
      max: [5000, 'Description is too long.'],
      required: [true, 'please enter the desciption']
    },
    category: {
      type: String,
      required: [true, 'please enter the category']
    }
  },
  {
    timestamps: true
  }
)
const Tool = mongoose.model('Tool', toolSchema);
module.exports = Tool;

// /title: 'Graphite pencils',
// img: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FhClI1l-JCfcq0xbKhv8UzQ%252FCT06A%2Bok.jpg&width=910',
// description: ' Graphite pencils are best sharpened using a sharp craft knife rather than a pencil sharpener. They are graded from hard (H) to soft (B). 9H is the hardest whereas 9B is the softest, with F (for fine) and HB in the middle range. H pencils (2H, 3H, and 4K;',
// category: 'Art',
// price: 45,
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
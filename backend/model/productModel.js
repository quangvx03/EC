const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vui lòng nhập tên sản phẩm!"],
  },
  description: {
    type: String,
    required: [true, "Vui lòng nhập mô tả sản phẩm!"],
  },
  category: {
    type: String,
    required: [true, "Vui lòng chọn danh mục sản phẩm!"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Vui lòng nhập giá sản phẩm!"],
  },
  stock: {
    type: Number,
    required: [true, "Vui lòng nhập kho sản phẩm!"],
  },
  images: [
    {
      type: String,
    },
  ],

  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);

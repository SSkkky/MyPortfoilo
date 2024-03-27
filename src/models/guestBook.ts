const mongoose = require('mongoose');

const GuestBookSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: Boolean, default: false },
  date: { type: String, required: true }
});

const BucketListModel = mongoose.model('GuestBook', GuestBookSchema);

module.exports = BucketListModel;
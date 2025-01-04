const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: {
    academic: Boolean,
    sports: Boolean,
    cultural: Boolean,
    technology: Boolean,
    workshops: Boolean,
    social: Boolean
  },
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
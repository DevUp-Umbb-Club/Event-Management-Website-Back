const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      enum: ['member', 'mentor', 'co-manager', 'manager'],
      required: true,
      default: 'member',
    },
    teamAssigned: {
      type: String,
      default: null,
    },
    isPrivileged: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(String(candidatePassword), String(this.password));
};

// Method to login user
userSchema.statics.login= async function (email,password){
  const user= await this.findOne({email}).select('+password');
  if(user){
    const auth= await bcrypt.compare(String(password),String(user.password));
    if(auth){
      return user;
    }
    throw Error('Incorrect password');

  }
  throw Error('Incorrect email');

}

module.exports = mongoose.model('User', userSchema);

import {Schema, model} from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter a email'],
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'Minimum password length is 6 characters'],
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true},
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  if (this.password) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAcessToken = function () {
  const payload = {
    _id: this._id,
    fullName: this.fullName,
    email: this.email,
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  });
};

userSchema.methods.generateRefreshToken = function () {
  const payload = {
    _id: this._id,
  };
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '10d',
  });
};

const User = model('User', userSchema);

export default User;

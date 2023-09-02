import * as mongoose from 'mongoose';

export const GamesSquemas = new mongoose.Schema({
  name: {
    type: String,
  },
  describe: {
    type: String,
  },
  dataRelease: {
    type: Date,
  },
  website: {
    type: String,
  },
  developer: {
    type : mongoose.Schema.Types.ObjectId, 
    ref: 'DevelopersSquemas', 
    require: true
  },
  gender: {
    type: String,
  },
  consoles: [
    {
      type : mongoose.Schema.Types.ObjectId, 
      ref: 'ConsolesSquemas', 
      require: true
    },
  ],
});

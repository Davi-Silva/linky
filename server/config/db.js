const mongoose = require('mongoose');

module.exports = {
  connectDB: async () => {
    try {
      console.log('process.env.MONGO_ATLAS_URI:', process.env.MONGO_ATLAS_URI)
      const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });

      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
};
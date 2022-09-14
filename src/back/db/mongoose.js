const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to mongoDB')
}).catch((error) => {
    console.log(error)
})

const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);

Tank.create({ size: 'small' }, function (err, small) {
    if (err) return handleError(err);
    // saved!
  });
  
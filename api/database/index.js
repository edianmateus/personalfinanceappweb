const mongoose = require('mongoose');
const vars = require('../security/constantesSecurity');

mongoose.connect(vars.connectUrl, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/QLBanHoa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('Database is connected successfully');
});
conn.on('disconnected', function() {
    console.log('Database is not connected');
});
conn.on('error', console.error.bind(console, 'Connection Error:'));
module.exports = conn;
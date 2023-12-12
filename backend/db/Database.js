const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.DB_URL).then((data) => {
        console.log(`Database conntected with server: ${data.connection.host}`);
    })
}

module.exports = connect
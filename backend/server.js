const app = require('./app');
const connect = require('./db/Database');

process.on("uncaughtException", (err) => {
    console.log(`Uncaught Exception: ${err}`);
    console.log(`Shutting down the server for handling uncaught exception`);
})

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: 'config/.env'
    })
}

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
// Connect Database
connect()
// unhandled promise rejection
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: ', promise, ' reason: ', reason);

    server.close(() => {
        process.exit(1)
    })
})
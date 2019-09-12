const express = require('express');
const mongo = require("./db/connect");

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
// app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
require('./routes/api')(app);

// MongoDB Server
async function connectDB() {
   const db = await mongo.connect();
   if (db) {
      startServer();
   }
}

function disconnectDB() {
   mongo.disconnect()
      .then(() => process.exit(0));
}

//Starting the server
function startServer() {
   const banner = `
   *****************************
          MongoDB API
         Project Server
   ****************************
   Status: Online
   Listening on port ${ app.get('port') }
   `;

   app.listen(app.get('port'), () => {
      console.info(banner);
   });

   process.on("SIGINT", disconnectDB);
}

connectDB();

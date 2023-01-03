const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db.js");

connectDB();

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

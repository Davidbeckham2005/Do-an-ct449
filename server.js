const app = require("./app.js"); //nap file app.js
const config = require("./app/config"); //nap file index.js
const port = config.app.port;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
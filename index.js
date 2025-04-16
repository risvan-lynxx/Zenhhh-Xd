const fs = require('fs');
const path = require('path');
const { MakeSession } = require("./lib/session");
const config = require("./config");
const connect = require("./lib/connection");
require("./express.js");
global.__basedir = __dirname;

async function readAndRequireFiles(directoryPath) {
    try {
        const files = await fs.promises.readdir(directoryPath);

        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            

            // Example: require the file if it's a JavaScript file
            if (filePath.endsWith('.js')) {
                require(filePath);
            }
        });
    } catch (err) {
        console.error('Error reading files:', err);
    }
}

async function initialize() {
    if (!fs.existsSync("./session/creds.json")) {
        await MakeSession(config.SESSION_ID, "./session");
        console.log("Version : " + require("./package.json").version);
    }

    console.log("WhatsApp Bot Initializing...");

    await readAndRequireFiles(path.join(__dirname, "./assets/database"));
    await config.DATABASE.sync();
    console.log("Database synchronized.");

    // Ensure WhatsApp connection is established first
    const client = await connect();

    console.log("Installing Plugins...");
    await readAndRequireFiles(path.join(__dirname, "./assets/plugins"));
    console.log("Plugins Installed!");
}

initialize();

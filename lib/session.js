const fs = require('fs');
const path = require('path');
const axios = require('axios');

const token = "7d036e2e3217a216687911bcec56e7566e3cd6a8227524c75bad4e5bfefcb4ef2cdc0f3a2f0b5a4ba4d17573f4a22a96e5ff30cdb5662b4311eeff3ed254c993";

async function MakeSession(sessionId, folderPath) {
    try {
        const pasteId = sessionId.split("~")[1];
        const rawUrl = `https://hastebin.com/raw/${pasteId}`;

        const config = {
            method: 'get',
            url: rawUrl,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios(config);

        // Ensure that response contains the content field
        if (!response.data || !response.data.content) {
            throw new Error("Empty or invalid response from Hastebin.");
        }

        // Ensure folder exists
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const outputPath = path.join(folderPath, "creds.json");

        // Parse and write the content of the response
        const dataToWrite = typeof response.data.content === "string"
            ? response.data.content
            : JSON.stringify(response.data.content);

        fs.writeFileSync(outputPath, dataToWrite);
        console.log("Session file saved successfully!");

    } catch (error) {
        console.error("An error occurred while saving session:", error.message);
    }
}

module.exports = { MakeSession };

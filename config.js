require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTA4MDgxNTM3NzY3NzgxNTgwOA.GzNAwK.x3K-NqRkvRX2IeNHFln5YpKK67F82WLgzBTjlI",  // your bot token
    logs: process.env.LOGS || "1080093182148218892", // channel id for lavalink server status logs
    nodes: [
        {
            host: process.env.NODE_HOST || "lava.gv23.repl.co",
            identifier: process.env.NODE_ID || "Public node",
            port: parseInt(process.env.NODE_PORT || "2333"),
            password: process.env.NODE_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
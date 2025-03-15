const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const songsDirectory = path.join(__dirname, "../../songs");
    const files = fs.readdirSync(songsDirectory);

    // Filter only MP3 files
    const songs = files.filter(file => file.endsWith(".mp3") || file.endsWith(".MP3"));

    return {
      statusCode: 200,
      body: JSON.stringify({ songs }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error listing songs" }),
    };
  }
};

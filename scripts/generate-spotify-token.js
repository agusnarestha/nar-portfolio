/**
 * Script to generate Spotify refresh token
 *
 * Usage:
 * 1. Run this script: node scripts/generate-spotify-token.js
 * 2. Open the URL shown in your browser
 * 3. Authorize the app
 * 4. Copy the redirect URL from your browser's address bar
 * 5. Paste it into the terminal
 * 6. The script will output your refresh token
 *
 * Add the refresh token to your .env.local file as SPOTIFY_REFRESH_TOKEN
 */

const querystring = require("querystring");

// Load environment variables from .env.local
const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");

const env = {};
envContent.split("\n").forEach((line) => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1].trim()] = match[2].trim();
  }
});

const client_id = env.SPOTIFY_CLIENT_ID;
const client_secret = env.SPOTIFY_CLIENT_SECRET;

if (!client_id || !client_secret) {
  console.error(
    "❌ Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env.local",
  );
  process.exit(1);
}

const redirect_uri = "http://127.0.0.1:8000/callback";

// Step 1: Generate authorization URL
const scope = "user-read-currently-playing user-read-playback-state user-read-recently-played";

const authUrl =
  "https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: "some-state-of-your-choice",
  });

console.log("\n📋 Step 1: Open this URL in your browser:\n");
console.log(authUrl);
console.log(
  "\n📋 Step 2: Authorize the app, then copy the FULL redirect URL from your browser's address bar",
);
console.log(
  "(It will look like: http://localhost:3000/callback?code=AQD...&state=some-state-of-your-choice)\n",
);

// Read the code from stdin
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("📋 Step 3: Paste the redirect URL here: ", async (redirectUrl) => {
  try {
    // Extract the code from the redirect URL
    const url = new URL(redirectUrl);
    const code = url.searchParams.get("code");

    if (!code) {
      console.error("❌ No code found in the redirect URL");
      rl.close();
      process.exit(1);
    }

    console.log("\n🔄 Exchanging code for tokens...\n");

    // Step 2: Exchange code for tokens
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ Error:", data.error);
      console.error("Description:", data.error_description);
      rl.close();
      process.exit(1);
    }

    console.log("✅ Success!\n");
    console.log("📝 Add this to your .env.local file:\n");
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
    console.log("\n💡 Your access token (for testing):", data.access_token);
    console.log("⏰ Token expires in:", data.expires_in, "seconds\n");

    rl.close();
  } catch (error) {
    console.error("❌ Error:", error.message);
    rl.close();
    process.exit(1);
  }
});

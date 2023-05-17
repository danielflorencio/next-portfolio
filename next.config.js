/** @type {import('next').NextConfig} */
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
// const env = dotenv.parse(fs.readFileSync('.env'));
const nextConfig = {
  reactStrictMode: true,
  // env: env
  env: {
    customKey: 'value'
  }
}
module.exports = nextConfig
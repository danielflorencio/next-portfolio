/** @type {import('next').NextConfig} */
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const env = dotenv.parse(fs.readFileSync('.env.local'));
const nextConfig = {
  reactStrictMode: true,
  env: env
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   env: {
//     NEXT_PUBLIC_GITHUB_KEY: '',
//   },
// }
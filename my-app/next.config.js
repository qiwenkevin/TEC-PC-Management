/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
    },
};

module.exports = nextConfig;
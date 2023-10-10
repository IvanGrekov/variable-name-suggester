const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    redirects: async () => {
        return [];
    },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'custom',
        loaderFile: './src/app/images.ts',
    },
}

module.exports = nextConfig

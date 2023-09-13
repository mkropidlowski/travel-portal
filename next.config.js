module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        unoptimized: true,
        domains: ["i.pinimg.com", "dcontent.inviacdn.net"],
    },
    reactStrictMode: true,
    experimental: { appDir: true },
    typescript: {
        ignoreBuildErrors: true, // for testing delete after all
    },
};

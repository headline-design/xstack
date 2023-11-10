const { withSentryConfig } = require("@sentry/nextjs");
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  // options
  flexsearch: true,
  staticImage: true,
  defaultShowCopyCode: true,
});

const sentryWebpackPluginOptions = {
  silent: true,
};

const nextConfig = withNextra({
  sentry: {
    autoInstrumentServerFunctions: false,
    hideSourceMaps: true,
  },
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );

    // return the modified config
    return config;
  },
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination:
            "https://xstack.build/sitemap.xml",
        },
      ],
    };
  },
});

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

const portalConfig = require("./portal_config.json");

module.exports = {
    siteMetadata: {
        heroTitle: portalConfig.heroTitle,
        heroSubtitle: portalConfig.heroSubtitle,
    },
    plugins: [
        {
            resolve: portalConfig.theme,
            options: {
                CONTENT_RUNTIME_REMOTE: portalConfig.contentRuntimeRemote,
                CONTENT_BUILDTIME_REMOTE: portalConfig.contentBuildtimeRemote,
                CONTENT_BUILDTIME_STATIC: portalConfig.contentBuildtimeStatic,
                CONTENT_STATIC_DIR: portalConfig.contentStaticDir,
                CONTENT_ORG: portalConfig.contentOrg,
                CONTENT_ROOTMAP: portalConfig.contentRootmap,
                CONTENT_TOKEN: portalConfig.contentToken,
                CONTENT_CLIENT_OPTS: portalConfig.contentClientOpts || {},
            },
        },
    ],
};

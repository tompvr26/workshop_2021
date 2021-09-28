module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.sass"`,
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
};



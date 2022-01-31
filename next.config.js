/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        // allow all scss files access to these files
        prependData: `@import "variables.scss"; @import "mixins.scss"; @import "fonts.scss"; `,
    },
};

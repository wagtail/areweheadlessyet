/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        // allow all scss files access to these files
        prependData: `@import "/styles/variables.scss"; @import "/styles/mixins.scss"; @import "/styles/fonts.scss"; `,
    },
};

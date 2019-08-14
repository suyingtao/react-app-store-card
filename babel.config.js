module.exports = {
    presets: [
        ['@babel/env', {loose: true, modules: process.env.BUILD_TARGET === 'es' ? false : 'commonjs'}],
        '@babel/react'
    ],
    plugins: [
        '@babel/proposal-class-properties'
    ]
};

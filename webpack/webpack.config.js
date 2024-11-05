import * as path from 'path';

const buildFolder = "./dist";
const srcFolder = "./src";
const paths = {
    src: path.resolve(srcFolder),
    build: path.resolve(buildFolder)
};


const config = {
    mode: "development",
    devtool: 'inline-source-map',
    optimization: {
        minimize: false
    },
    entry: {
        app: `${paths.src}/js/app.js`,
    },
    output: {
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: `${paths.src}/fonts`,
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                        modules: false,
                        url: {
                            filter: (url, resourcePath) => {
                                if (url.includes("fonts/")) {
                                    return false;
                                }
                                return true;
                            },
                        },
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
                ],
            }
        ]
    }
};
export default config;
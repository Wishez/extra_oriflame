const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '../', dir);
}
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules.push({
        test: /\.scss|sass$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                // includePaths: ["absolute/path/a", "node_modules//"]
            }
        }],
        include: [resolve('../'), resolve('')]
    });

    config.resolve = {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve(''),
        },
    };

    return config;
};
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss|sass$/,
//          use: [{
//             	loader: "style-loader"
// 	       	}, {
// 	            loader: "css-loader"
// 	        }, {
// 	            loader: "sass-loader",
//             	options: {
//                 	// includePaths: ["absolute/path/a", "node_modules//"]
//             	}
//         }],
//         include: [path.resolve(__dirname, '../../'), path.resolve(__dirname, '../')]
//       }
//     ]
//   }
// };
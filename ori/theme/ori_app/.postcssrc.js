// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "modules": true,
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
    	"grid": true
    },
	'postcss-import': {},
	'postcss-cssnext': {},
	// 'postcss-simple-vars': {}, // Again, not necessarily recommended
	// 'cssnano': {}
  }
}

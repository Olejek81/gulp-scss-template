"use strict";

var pkg     = require('../../package.json'),
    bundler = require('./helpers/bundler');


/* Paths */

var _src    = './src/',
    _dist   = './dist/',
    _public = './public/';

var _js     = 'js/',
    _css    = 'css/',
    _img    = 'img/',
    _jade   = 'jade/',
    _sass    = 'sass/';


/* Bundles */

var bundles = [
  {
    name        : 'app',
    global      : 'app',
    compress    : true,
    saveToDist  : true
  }
];


/* Tasks params */

module.exports = {

  scripts: {
    bundles: bundler(bundles, _js, _src, _dist, _public),
    banner: '/** ' + pkg.name + ' v' + pkg.version + ' **/\n',
    extensions: ['.jsx'],
    lint: {
      options: pkg.lintOptions,
      dir: _src + _js
    }
  },


  css: {
    bundles: bundler(bundles, _css, _src, _dist, _public),
    src: _src + _css,
    params: {
      compress: false
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    },
    compress: {}
  },

  sass: {
    bundles: bundler(bundles, _sass, _src, _dist, _public),
    src: _src + _sass,
    params: {
      compress: false
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    },
  /*  compress: {}*/
  },

  images: {
    src: _src + _img,
    dest: _public + _img,
    imagemin: {}
  },

  jade: {
    src: _src + _jade,
    dest: _public,
    params: {
      pretty: true || devBuild,
      locals: {
        pkgVersion: pkg.version,
        pkgHomepage: pkg.homepage
      }
    }
  },

  copy: {
    base: _src,
    from: [
      _src + 'fonts/**/*',
      _src + 'json/**/*',
      _src + 'files/**/*',
      _src + 'favicon.ico'
    ],
    to: _public
  },

  clean: {
    _public: _public,
    _dist: _dist
  }

};

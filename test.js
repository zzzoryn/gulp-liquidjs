'use strict';
const assert = require('assert');
const gutil = require('gulp-util');
const liquid = require('./index');
const fs = require('fs');
const {describe, it} = require('mocha');

const opts = {
  data: {name: 'tobi'},
  filters: {test: (v) => v + ' test'}
};

describe('empty', function() {
  it('interpolate {{...}}', function(cb) {
    const stream = liquid();
    stream.on('data', function(file) {
      assert('hi ', file.contents.toString());
      cb();
    });

    stream.write(new gutil.File({
      path: 'file.liquid',
      contents: new Buffer('hi {{name}}')
    }));
  });

  it('default tags {%...%}', function(cb) {
    const stream = liquid(opts);
    stream.on('data', function(file) {
      assert('OK', file.contents.toString());
      cb();
    });

    stream.write(new gutil.File({
      path: 'file.liquid',
      contents: new Buffer('{% if name %}OK{% endif %}')
    }));
  });

  it('default filters {{... | ...}}', function(cb) {
    const stream = liquid(opts);
    stream.on('data', function(file) {
      assert('nana', file.contents.toString());
      cb();
    });

    stream.write(new gutil.File({
      path: 'file.liquid',
      contents: new Buffer('{{name | replace: "me", "na"}}')
    }));
  });
});

describe('with options', function() {
  it('interpolate {{...}}', function(cb) {
    const stream = liquid(opts);
    stream.on('data', function(file) {
      assert('hi tobi', file.contents.toString());
      cb();
    });

    stream.write(new gutil.File({
      path: 'file.liquid',
      contents: new Buffer('hi {{name}}')
    }));
  });

  it('custom filters {{... | ...}}', function(cb) {
    const stream = liquid(opts);
    stream.on('data', function(file) {
      assert('tobi test', file.contents.toString());
      cb();
    });

    stream.write(new gutil.File({
      path: 'file.liquid',
      contents: new Buffer('{{name | test}}')
    }));
  });
});
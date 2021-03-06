Gulp Liquid
===========
Liquid plugin for gulp

Default tags
------------
* assign
* capture
* case
* comment
* decrement
* for
* if
* ifchanged
* include
* increment
* raw
* unless

Default filters
---------------
* abs
* append
* capitalize
* ceil
* date
* default
* divided_by
* downcase
* escape
* escape_once
* first
* floor
* join
* last
* lstrip
* map
* minus
* modulo
* newline_to_br
* plus
* prepend
* remove
* remove_first
* replace
* replace_first
* reverse
* round
* rstrip
* size
* slice
* sort
* split
* strip
* strip_html
* strip_newlines
* times
* truncate
* truncatewords
* uniq
* upcase
* url_encode

Installation
------------

```git
npm install --save-dev gulp-liquidjs
```

Usage
-----
gulpfile.js:
```js
const gulp = require('gulp');
const liquid = require('gulp-liquidjs');

gulp.src("./src/*.liquid")
    .pipe(liquid())
    .pipe(gulp.dest("./dist"));
```

API
---
#### liquid(options)

* **options.data** - ***{Object}*** - The locals object is passed as template variables to the liquid templating engine.
* **options.tags** - ***{Object}*** - Custom tags. See [registration-of-new-tags](https://www.npmjs.com/package/liquid-node#registration-of-new-tags)
* **options.filters** - ***{Object}*** - Custom filters. See [registration-of-new-filters](https://www.npmjs.com/package/liquid-node#registration-of-new-filters)


##Underscore.get


### Usage

### For Node.js, Browserify and Webpack

Install from npm

    npm install underscore.get

Require individual functions

```javascript
const {get} = require("underscore.get");

get(obj, 'a[0].b', defaultValue);
```

Or use Mixin

```javascript
const getMixin = require("underscore.get");
_.mixin(getMixin);
_.get(obj, 'a[0].b', defaultValue);
```

Or globally

<include src="./dist/global-bundle.js">
*Note: this does not bundle underscore and must be included in your index.html after the underscore library.

##Don't forget to star the [github repository!](https://github.com/NarHakobyan/underscore.get)

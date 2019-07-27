# [DEPRECATED]
Please use improved [randpassgen2](https://www.npmjs.com/package/randpassgen2) package instead.

# randpassgen

A simple node module to generate random string of alphanumeric characters and/or symbols. 

# Installation

```
$ npm install randpassgen
```

# Usage

```
$ generate(length[int], uppercase[true|false], symbol[true|false]);
```

### Example
Generate a 8 character random string consisting lowercase, uppercase, numbers and symbols
```
var pass = require('randpassgen').generate(8);
```

Generate a 8 character random string consisting only lowercase, numbers and symbols
```
var pass = require('randpassgen').generate(8, false, true);
```

Generate a 8 character random string consisting only lowercase and numbers
```
var pass = require('randpassgen').generate(8, false, false);
```

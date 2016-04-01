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
Generate a 8 character random string consisting lowercase, uppercase and symbols
```
var pass = require('randpassgen').generate(8);
```

Generate a 8 character random string consisting only lowercase and symbols
```
var pass = require('randpassgen').generate(8, false, true);
```
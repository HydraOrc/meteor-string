# HydraOrc:String

Small, simple and useful package to work with strings

### Usage

```
import { sanitizeString } from 'meteor/hydraorc:string';

sanitizeString(' Test  %20  TEST   '); // => 'test test'
```

```
import { escapeRegExp } from 'meteor/hydraorc:string';

escapeRegExp('*?'); // => '\*\?'
```

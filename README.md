## Greek Utils

A javascript library that contains useful utilities for the Greek language.

### Installation

```
npm i @bill.kampouroudis/greek-utils
```

### Usage

#### sanitize(greekText)

```javascript
import greekUtils from '@bill.kampouroudis/greek-utils';
console.log(greekUtils.sanitize('Ταΐζω') //-> Ταιζω
```

#### toLatin(greekText)

```javascript
import greekUtils from '@bill.kampouroudis/greek-utils';
console.log(greekUtils.toLatin('Κατά φωνή κι ο γάιδαρος') //-> Kata foni ki o gaidaros
```

## Available Scripts

In the project directory, you can run:

#### `npm run test`

Runs all tests using Jest.

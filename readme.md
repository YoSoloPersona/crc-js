# yo-crc-js

A module that is used to calculate the checksum.

## Installation and Usage

```shell
npm install yo-crc-js
```


```ts
import { crc16IBM, crc16IBMi, crc32IEEE, crc32IEEEi } from '../index';

// string '123456789'
const data = new Uint8Array([ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ]);

const crc = crc16IBM(data);

console.log(crc);

```
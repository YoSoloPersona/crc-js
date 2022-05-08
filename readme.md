# yo-crc-js

A module that is used to calculate the checksum.

## Installation and Usage

```shell
npm install yo-crc-js
```


```ts
import { crc16IBM, crc16IBMi, crc32IEEE, crc32IEEEi } from 'yo-crc-js';

// string '123456789'
const uint8Array = new Uint8Array([ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ]);
const arrayNumber = [ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ];
const str = '123456789';


console.log(`
    crc16IBM (data: Uint8Array) => ${crc16IBM(uint8Array)},
    crc16IBM (data: number[]) => ${crc16IBM(arrayNumber)},
    crc16IBM (data: string) => ${crc16IBM(str)}
    `);
```
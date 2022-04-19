import { crc16IBM, crc16IBMi, crc32IEEE, crc32IEEEi } from '../index';

// string '123456789'
const data = new Uint8Array([ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ]);

describe('#index', () => {
    it('crc16IBM', () => {
        expect(crc16IBM(data)).toBe(BigInt(0xBB3D));
    });

    it('crc16IBMi', () => {
        expect(crc16IBMi(data)).toBe(BigInt(0xB4C8));
    });

    it('crc32IEEE', () => {
        expect(crc32IEEE(data)).toBe(BigInt(0x2DFD2D88));
    });

    it('crc32IEEEi', () => {
        expect(crc32IEEEi(data)).toBe(BigInt(0xCBF43926));
    });
});

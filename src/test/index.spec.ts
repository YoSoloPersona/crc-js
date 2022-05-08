import { crc16IBM, crc16IBMi, crc32IEEE, crc32IEEEi } from '../index';

// string '123456789'
const uint8Array = new Uint8Array([ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ]);
const str = '123456789';
const arrayNumber = [ 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39 ];

describe('#index', () => {
    describe('calculate with data type Uint8Array', () => {
        it('crc16IBM', () => {
            expect(crc16IBM(uint8Array)).toBe(BigInt(0xBB3D));
        });
    
        it('crc16IBMi', () => {
            expect(crc16IBMi(uint8Array)).toBe(BigInt(0xB4C8));
        });
    
        it('crc32IEEE', () => {
            expect(crc32IEEE(uint8Array)).toBe(BigInt(0x2DFD2D88));
        });
    
        it('crc32IEEEi', () => {
            expect(crc32IEEEi(uint8Array)).toBe(BigInt(0xCBF43926));
        });
    });

    describe('calculate with data type string', () => {
        it('crc16IBM', () => {
            expect(crc16IBM(str)).toBe(BigInt(0xBB3D));
        });
    
        it('crc16IBMi', () => {
            expect(crc16IBMi(str)).toBe(BigInt(0xB4C8));
        });
    
        it('crc32IEEE', () => {
            expect(crc32IEEE(str)).toBe(BigInt(0x2DFD2D88));
        });
    
        it('crc32IEEEi', () => {
            expect(crc32IEEEi(str)).toBe(BigInt(0xCBF43926));
        });
    });
    
    describe('calculate with data type number[]', () => {
        it('crc16IBM', () => {
            expect(crc16IBM(arrayNumber)).toBe(BigInt(0xBB3D));
        });
    
        it('crc16IBMi', () => {
            expect(crc16IBMi(arrayNumber)).toBe(BigInt(0xB4C8));
        });
    
        it('crc32IEEE', () => {
            expect(crc32IEEE(arrayNumber)).toBe(BigInt(0x2DFD2D88));
        });
    
        it('crc32IEEEi', () => {
            expect(crc32IEEEi(arrayNumber)).toBe(BigInt(0xCBF43926));
        });
    });
});
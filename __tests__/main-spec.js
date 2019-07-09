const add = require('../src/main');

//test of isBarcodesExited
it('should return null when invoke isBarcodesExited given 0011', function () {
    //given
    const id = '0011';
    //when
    const result = add.isBarcodesExited(id);
    //then
    expect(result).toBe(null);
});

it('should ', function () {
    const barcodes = ['0001', '0003', '0005', '0003'];
    const  result = add.createReceipts(barcodes);
    expect(result).toBe('dsasdsddsd')
});
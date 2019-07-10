const add = require('../src/main');

//test of isBarcodesExited
it('should return null when invoke isBarcodesExited given 0011', function () {
    //given
    const id = '0011';
    //when
    const result = add.isBarcodeExisted(id);
    //then
    expect(result).toBe(null);
});

it('should return receipts when invoke printRecipt given [\'0001\', \'0003\', \'0005\', \'0003\']', function () {
    const barcodes = ['0001', '0003', '0005', '0003'];
    const  result = add.createRecipts(barcodes);
    expect(result).toBe('xcxc')
});
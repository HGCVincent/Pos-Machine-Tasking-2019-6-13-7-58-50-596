var data = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function printReceipt(barcodes) {

}

function isBarcodesExited(barcode) {
    var IsExited;
    for (var j=0;j<data.length;j++){
        if (barcode == data[j]['id']){
            IsExited = data[j];
            break;
        }
        else IsExited = null;
    }
    return IsExited;
}

function createReceipts(barcodeList){
    var exitBarcode = [];
    var errorBarcode = [];
    var result = '';
    for (var i = 0;i<barcodeList.length;i++){
        var IsExited = isBarcodesExited(barcodeList[i])
        if (IsExited != null){
            if (!exitBarcode[IsExited]){
                exitBarcode[IsExited] = 1;
            }
            else exitBarcode[barcodeList[i]]++;
        }
        else errorBarcode.push(barcodeList[i]);
    }
    if (errorBarcode.length>0){
        result += '[ERROR]' + '\n';
    }
    result += 'Receipts' + '\n' + '-----------------------------------------------------------' + '\n';

    var count=0;
    for (var b in exitBarcode ){
        result += b['name'] + '          ' + b['price']*exitBarcode[b] + '          ' + exitBarcode[b] + '\n';
        count += b['price']*exitBarcode[b];
    }
    result += '-----------------------------------------------------------' + '\n' + 'Price:' + count;
    return result;
}

module.exports ={
    isBarcodesExited,createReceipts
}
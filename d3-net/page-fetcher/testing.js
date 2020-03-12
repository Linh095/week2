var len = Buffer.byteLength('abc');
console.log(len);

var buf = Buffer.alloc(15);
var len = Buffer.byteLength(buf);
console.log(len);
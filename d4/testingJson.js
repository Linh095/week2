const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
jsonString // a string, of course :)


const obj = JSON.parse(jsonString);
console.log("parsed object ", obj); 

delete obj.foo;
console.log('deleted object' ,obj); 

JSON.stringify(obj);

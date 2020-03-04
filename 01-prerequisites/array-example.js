

const stamStrings = ['hello', 'world', 'foo', 'bar'];

// [5, 5, 3, 3]
const myLength = stamStrings.map(function(singleStam, index) {
    return singleStam.length;
})
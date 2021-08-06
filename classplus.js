function test (virus, sample) {
    let size = virus.length;
    let x = 0;
    // if size of sample is greater than virus
    if (sample.length > virus.length) {
        return false;
    }
    if (sample.length == 0) {
        return false;
    }
    var i;
    for (i=0; i<sample.length; i++) {
        while (x < size && sample[i] != virus[x]) {
            x++;
        }
        if (x >= size) {
            break;
        }
        x++;
    }
    if (i <= sample.length-1) {
        return false;
    }
    return true;
}

console.log(test("coronavirus", "corovirus"));
console.log(test("coronavirus", "covid"));
console.log(test("coronavirus", "conaviruso"));
console.log(test("coronavirus", ""));
console.log(test("coronavirus", "covido"));
console.log(test("coronavirus", "coronavirus"));


function count (str) {
    /**
     * function count
     * str is L/R/T/B 
     * lcount, tcount, rcount, bcount
     */
    var counter = 0;
    var arr = [{'l': 0}, {'t': 0}, {'r': 0}, {'b': 0}];
    function inc() {
        if (str) {
            let s;
            let cnt;
            if (str == 'l') {
                s = arr[0][str];
                cnt = arr[0][str];
                arr[0][str] = cnt + 1; 
                counter = 0;               
            } else if (str == 't') {
                s = arr[1][str];
                cnt = arr[1][str];
                arr[1][str] = cnt + 1;
                counter = 1;
            } else if (str == 'r') {
                s = arr[2][str];
                cnt = arr[2][str];
                arr[2][str] = cnt + 1;
                counter = 2;
            } else if (str == 'b') {
                s = arr[3][str];
                cnt = arr[3][str];
                arr[3][str] = cnt + 1;
                counter = 3;
            }
            return str + "," + s;
        } else {
            let s = arr[counter%4];
            let [key] = Object.keys(s);
            let cnt = s[key] + 1;
            arr[counter%4][key] = cnt; 
            counter++;
            return key + "," + cnt;
        }
        
    }
    return inc;
}

var x = count()
console.log(x()); // l,1
console.log(x()); // t,1
console.log(x()); // r,1
console.log(x()); // b,1
console.log(x()); // l,2
console.log(x()); // t,2
console.log(x('t')); // t,3
console.log(x('l')); // l,3
console.log(x()); // t,4
console.log(x()); // r,2
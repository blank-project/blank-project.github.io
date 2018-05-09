const {performance} = require('perf_hooks');
var fs = require('fs');


function array_insert_bench(out_file){
    let delays = {};
    for (let array_size of [20, 200, 2000, 20000, 200000, 2000000, 20000000]){
        delays[array_size] = [];
        console.log('benching with ' + array_size + ' elements');
        for (let i=0; i!= 200; i++){
            let array = new Array(array_size);
            // array.fill(0);
            let start = performance.now();
            array.unshift(1);
            let stop = performance.now();
            delays[array_size].push(stop - start);
        }
    }
    fs.writeFile(out_file, JSON.stringify(delays), 'utf8', lambda  => {});
}

array_insert_bench('/tmp/insert_bench.json');
console.log('Done');

var n = process.argv[2];

function countUntil(to,inc) {
    for (var i = 0; i <= to*to*to; i+=inc) {
        console.log(i);
    }
}

if (n % 2 == 0) {
    countUntil(n,2);
} else {
    countUntil(n,3);
}

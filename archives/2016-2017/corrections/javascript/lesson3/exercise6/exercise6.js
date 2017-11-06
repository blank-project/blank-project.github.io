function count(end, inc) {
  var cube = end*end*end;
  for (var i = 0; i <= cube; i = i + inc) {
    console.log(i);
  }
}

function count2(end) {
  if (end % 2 == 0) {
    for (var i = 0; i <= end*end*end; i=i+2) {
      console.log(i);
    }
  } else {
    for (var i = 0; i <= end*end*end; i=i+3) {
      console.log(i);
    }
  }
}

function count3(end) {
  var j = 3;
  if (end % 2 == 0) {
    j = 2;
  }
  for (var i = 0; i <= end*end*end; i=i+3) {
    console.log(i);
  }
}

var n = process.argv[2];

if (n % 2 == 0) {
  count(n,2);
} else {
  count(n,3);
}

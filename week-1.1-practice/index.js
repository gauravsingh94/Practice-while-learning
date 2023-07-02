function check1() {
  var sampleText = "Hello";
  return new Promise((resolve) => {
    console.log(resolve);
  });
}

function check2(resolve) {
  console.log("function is passed");
}

check1().then(check2);


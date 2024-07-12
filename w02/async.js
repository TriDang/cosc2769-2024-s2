function f1() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      let r = Math.random();
      resolve(r);
    }, 1000);
  });
}

async function f2() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      let r = Math.random();
      resolve(r);
    }, 1000);
  });
}

////////////////////
// Solution #1
// call f1()
// when f1() resolves, call f2()
// total time: 2 seconds

console.log('Start time:', new Date());
f1().then(
  (n1) => {
    console.log(`First number: ${n1}`);
    f2().then(
      (n2) => {
        console.log(`Second number: ${n2}`);
        console.log(`Sum: ${n1 + n2}`);
        console.log('End time:', new Date());
      }
    )
  }
);


//////////////////////
// Solution #2
// use async/await to simplify the code
// total time: 2 seconds

async function calcSum() {
  const n1 = await f1();
  console.log(`First number: ${n1}`);
  const n2 = await f2();
  console.log(`Second number: ${n2}`);
  return n1 + n2;
}

console.log('Start time:', new Date());
calcSum().then(n => {
  console.log(`Sum: ${n}`);
  console.log('End time:', new Date());
});


//////////////////////
// Solution #3
// allow two promises run at the same time
// total time: 1 second

async function calcSumFaster() {
  const p1 = f1();  // p1 is a promise
  const p2 = f2();  // p2 is also a promise
  return Promise.all([p1, p2]);
}

console.log('Start time:', new Date());
calcSumFaster().then( (values) => {
  console.log(`First number: ${values[0]}`);
  console.log(`Second number: ${values[1]}`);
  console.log(`Sum: ${values[0] + values[1]}`);
  console.log('End time:', new Date());
});

let res = 1000_000;
let growth = 1.10;

for (let i = 1; i <= 100; i++) {
    res =  res * growth;
    console.log(i, Math.floor(res / 1000000));
}

const fs = require("fs");

function solvePolynomial() {
  let rawData;
  try {
    rawData = fs.readFileSync("test_case2.json");
  } catch (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const data = JSON.parse(rawData);
  const k = parseInt(data.keys.k);
  const points = [];

  for (const key in data) {
    if (points.length < k && !["keys"].includes(key)) {
      const x = parseInt(key);
      const base = parseInt(data[key].base);
      const value = data[key].value;

      const y = BigInt(parseInt(value, base));

      points.push({ x: BigInt(x), y: y });
    }
  }

  let C = BigInt(0);
  const targetX = BigInt(0);

  for (let i = 0; i < points.length; i++) {
    let L_i = BigInt(1);
    let numerator = BigInt(1);
    let denominator = BigInt(1);

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        numerator *= targetX - points[j].x;
        denominator *= points[i].x - points[j].x;
      }
    }

    if (denominator < 0) {
      numerator = -numerator;
      denominator = -denominator;
    }
    L_i = numerator / denominator;
    C += L_i * points[i].y;
  }

  console.log("The secret value (c) is:", C.toString());
}

solvePolynomial();

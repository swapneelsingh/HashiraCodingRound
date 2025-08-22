### README.md

## Polynomial Interpolation Assignment

This project solves the "Catalog Placements Assignment" task, which involves finding the constant term of a polynomial using **Lagrange Interpolation**. The input data is provided in a JSON file where point coordinates $(x, y)$ are given, with the $y$ values encoded in different number bases.

---

### 📝 Assignment Checkpoints

-   **Read Input**: The code reads and parses a JSON file containing the test case data.
-   **Decode Y Values**: It correctly decodes the `y` values from their specified bases (e.g., base 2, base 16) into their decimal equivalents. This step is critical as it handles large numbers using JavaScript's **`BigInt`** data type to prevent precision loss.
-   **Find the Secret (C)**: It applies the Lagrange Interpolation method to find the constant term `c` of the polynomial. The constant term is equivalent to the value of the polynomial at $x=0$.

---


#### Usage

1.  Make sure your JSON test case file is in the same directory as the `solve.js` script (e.g., `test_case.json` or `test_case2.json`).
2.  Open the `solve.js` file and change the `filename` variable to match your test case file.
    ```javascript
    const filename = 'test_case.json'; // or 'test_case2.json'
    ```
3.  Run the script from your terminal:
    ```bash
    node solve.js
    ```
4.  The output will be the calculated value of `c`, printed to the console.

---

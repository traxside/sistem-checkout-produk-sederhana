| Scenario | `harga` | `jumlah` | `isMember` | Expected Output | Notes / Calculation Details |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Member Discount | `100000` | `2` | `true` | `195000` | Subtotal: 200,000 <br> Diskon (10%): 20,000 <br> SubtotalDiskon: 180,000 (< 250,000) <br> Ongkir: 15,000 |
| Non-Member (No Discount) | `100000` | `2` | `false` | `215000` | Subtotal: 200,000 <br> Diskon (0%): 0 <br> SubtotalDiskon: 200,000 (< 250,000) <br> Ongkir: 15,000 |
| Subtotal Below Rp250.000 | `200000` | `1` | `false` | `215000` | SubtotalDiskon: 200,000 (< 250,000) <br> Ongkir applied: 15,000 |
| Subtotal Right at Rp250.000 | `250000` | `1` | `false` | `250000` | SubtotalDiskon: 250,000 (Boundary condition) <br> Free Ongkir: 0 |
| Subtotal Above Rp250.000 | `300000` | `1` | `true` | `270000` | Subtotal: 300,000 <br> Diskon (10%): 30,000 <br> SubtotalDiskon: 270,000 (>= 250,000) <br> Free Ongkir: 0 |
| Invalid Input: `jumlah` is 0 | `100000` | `0` | `true` | `"Input tidak valid"` | `jumlah` harus bilangan bulat positif (> 0). |
| Invalid Input: `jumlah` is Float | `50000` | `2.5` | `false` | `"Input tidak valid"` | `jumlah` harus bilangan bulat (`Number.isInteger`). |
| Invalid Input: `harga` is Invalid | `-50000` | `1` | `true` | `"Input tidak valid"` | `harga` harus bilangan positif (> 0). |


function hitungCheckout(harga, jumlah, isMember) {
    
    const BATAS_ONGKOS_KIRIM = 250000;
    let TARIF_DISKON = 0;
    let ONGKOS_KIRIM = 0;

    if (typeof harga === "number" && harga > 0 &&
        Number.isInteger(jumlah) && jumlah > 0 &&
        typeof isMember === "boolean"
    ){
        let subtotal = harga * jumlah;

        if (isMember) {
            TARIF_DISKON = 0.1;
        } else {
            TARIF_DISKON = 0;
        }

        let subtotalDiskon = subtotal - (subtotal * TARIF_DISKON);

        if (subtotalDiskon >= BATAS_ONGKOS_KIRIM) {
            ONGKOS_KIRIM = 0;
        } else {
            ONGKOS_KIRIM = 15000;
        }

        let total = subtotalDiskon + ONGKOS_KIRIM;

        return total;

    } else {
        return "Input tidak valid";
    }
}

// Testing
console.log("Kondisi 1: " + hitungCheckout(100000, 2, true));    // EXPECTED OUTPUT: 195000

console.log("Kondisi 2: " + hitungCheckout(100000, 2, false));   // EXPECTED OUTPUT: 215000

console.log("Kondisi 3: " + hitungCheckout(200000, 1, false));   // EXPECTED OUTPUT: 215000

console.log("Kondisi 4: " + hitungCheckout(250000, 1, false));   // EXPECTED OUTPUT: 250000

console.log("Kondisi 5: " + hitungCheckout(300000, 1, true));    // EXPECTED OUTPUT: 270000

console.log("Kondisi 6: " + hitungCheckout(100000, 0, true));    // EXPECTED OUTPUT: "Input tidak valid" 

console.log("Kondisi 7: " + hitungCheckout(50000, 2.5, false));  // EXPECTED OUTPUT: "Input tidak valid" 

console.log("Kondisi 8: " + hitungCheckout(-50000, 1, true));    // EXPECTED OUTPUT: "Input tidak valid" 
BEGIN
    INPUT hargaProduk, jumlahProduk, member
    BATAS_ONGKOS_KIRIM <- 250000

    IF hargaProduk is number AND hargaProduk > 0 AND
       jumlahProduk is integer AND jumlahProduk > 0 AND
       member is boolean THEN
    
        subtotal <- hargaProduk * jumlahProduk

        IF member is true THEN
            TARIF_DISKON = 0.1
        ELSE 
            TARIF_DISKON = 0
        ENDIF

        subtotalDiskon = subtotal - (subtotal * TARIF_DISKON)

        IF subtotalDiskon >= BATAS_ONGKOS_KIRIM THEN
            ONGKOS_KIRIM = 0
        ELSE 
            ONGKOS_KIRIM = 15000
        ENDIF

        total = subtotalDiskon + ONGKOS_KIRIM

        OUTPUT total

    ELSE 
        OUTPUT "Input tidak valid"

    ENDIF

END
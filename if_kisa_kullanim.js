// If kısa kullanımı, Ternary, switch



// let a = 5,
    //     b = 15,
    //     c = 0;
    
    // if(a > b){
    //     c = a + b;
    // }else{
    //     c = a - b;
    //     console.log("c' nin değeri:" + c);
    // }
 
    

    let a = 5,
    b = 15,
    c = 0;

    // if'in kısayoldan kullanısı
    // if   -> ?
    // else -> :

    c = (a > b) ? (a + b) : (a - b)
    console.log("C'nin yeni değeri " + c);


    // if'in uzun yoldan kullanısı

    if(a > b){
        c = a + b;
    }else{
        c = a - b;
        console.log("c' nin değeri:" + c);
    }
// Switch Case kullanımı

// let haftaKacGun = 6;

// if(haftaKacGun === 1){
//     console.log("pazartesi");
// }else if(haftaKacGun === 2){
//     console.log("salı");
// }else if(haftaKacGun === 3){
//     console.log("çarsamba");
// }
// else if(haftaKacGun === 4){
//     console.log("persembe");
// }
// else if(haftaKacGun === 5){
//     console.log("cuma");
// }
// else if(haftaKacGun === 6){
//     console.log("cumartesi");
// } else{
//     console.log("pazar");
// }


let haftaKacGun = 6;
 
switch(haftaKacGun){

    case 1:
        console.log("pazartesi");
         
    case 2:
        console.log("salı");
       
    case 3:
        console.log("carsamba");
         
    case 4:
        console.log("persembe");
         
    case 5:
        console.log("cuma");
        
    case 6:
        console.log("cumartesi");
        break;
    case 7:
        console.log("Pazar");
    break;

    default: console.log("Böyle bir gün bulunamadı");
}




// ----------------------------------- swith case  ----------------------//


const fruit = "lemon"
switch (fruit) {
    case 'apple':
        console.log("apple")
        break;
    case 'orange':
        console.log("orange")
        break;
    default:
        console.log("none")
}


const number = '15'
switch (number) {
    case "18":
        console.log("moi ban vao xem")
        break;
    case "15":
        console.log("ban chua du tuoi")
        break;

    default:
        console.log("toi ko bann ve cho ban")
}

// ----------------------------------- TOÁN TỦ BA NGÔI  ----------------------//

const age = 18
let messenger = age >= 18 ? "ban da lon" : "ban la con nit"
console.log(messenger)


const age1 = 9
let messenger2 = age1 >= 18 ? "ban da lon" : (age1 <= 10 ? "m la con nit" : "ban la con trai")
console.log(messenger2)
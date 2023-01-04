function sum(a, b) {
    return a + b;
}

console.log("sum:", sum(10, 15))
    // const tinhtong = sum

function trungbinhcong(a, b, fn) {
    const total = fn(a, b) / 2
    return total
}

let result = trungbinhcong(100, 200, sum)
console.log("result: ", result)


// ----------------------------  Closure ----------------------------//

function sayHi() {
    message = "Hello world"

    function sayHello() {
        console.log(message)
    }
    sayHello()
}
sayHi()

function XinChao() {
    let message = "xin chao"

    function Hi(name = " tran chi") {
        console.log(`${message} ${name}`)
    }
    Hi()
}
XinChao()


// ----------------------------  EX ----------------------------//

// BT1: SO SÁNH VÀ TÌM RA SỐ LỚN NHẤT

function Max(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    return Math.max(a, b);
}
console.log("max:", Max(5, 10))

// BT2: CHUYỂN CHỮ CÁI ĐẦU TIÊN THÀNH IN HOA : VS: nam => Nam || NAM => Nam

function Name(name = "") {
    if (name.length === 0) return "moi nhap vao"

    let firstName = name.toLowerCase().charAt(0).toLocaleUpperCase()
    console.log("firstName: ", firstName)

    let nthName = name.toLowerCase().slice(1)
    console.log("nthName: ", nthName)

    return `${firstName}${nthName}`

}
console.log(Name("CHI"))
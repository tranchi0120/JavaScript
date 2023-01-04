const number1 = "5"
const number2 = "4.8"

const number3 = -10
const number4 = 4.3


// 1.parseInt: CHUYỂN CHUỖI THÀNH SỐ NGUYÊN
console.log("number1: ", parseInt(number1))

//2. CHUYỂN CHUỖI THÀNH SỐ THẬP PHÂN
console.log("number2: ", parseFloat(number2))


// 3. Math.abs(value) : GIÁ TRỊ TUYỆT ĐỐI
console.log("number3:", Math.abs((number3)))

// 4.Math.floor(value) -> LÀM TRÒN XUỐNG
console.log("math.floor", Math.floor(number2))
console.log("math.floor", Math.floor(number4))

// 5.Math.ceil(value) -> LÀM TRÒN LÊN
console.log("math.floor", Math.ceil(number4))
console.log("math.floor", Math.ceil(number2))


// 6.Math.round(value) : TRÊN 0.5 LÀ LÀM TRÒN LÊN. DƯỚI 0.5 LÀ LÀM TRÒN XUỐNG
console.log(Math.round(4.5))
console.log(Math.round(4.2))


// 7. toFixed : LÀM TRÒN CHỮ SỐ THẬP PHÂN
console.log("toFixed:", (1 / 3).toFixed(2))


console.log(Math.ceil(Math.random() * 10))


const arr = [1, 2, 3, 4, 5, -1, -5]
console.log(Math.max.apply(Math, arr))
console.log(Math.min.apply(Math, arr))


// MAX VÀ MIN 
console.log("Math.max:", Math.max(3, 5, 7, -1, 9))
console.log("Math.min:", Math.min(3, 5, 7, -1, 9))



console.log("isNaN:", isNaN("this is not NaN"))

// BỞI VÌ TRƯỚC isNaN LÀ DÙNG NUMBER ĐỂ CHUYỂN VỀ SỐ RỒI XÉT XEM ĐÚNG HAY SAI => VD: number("12345") -> KQ: 12345
console.log("isNaN:", isNaN("12345"))



//  CÁC GIÁ TRỊ CỦA Nunber
console.log(Number(12345))
console.log(Number("12212"))
console.log(Number(false))
console.log(Number(''))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(NaN))
console.log(Number("adasda"))
console.log(Number(true))
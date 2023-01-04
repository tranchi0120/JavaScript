const student = ["chi", "trung", "linh", "tung", "hung", "trung"]
const student1 = [1, 2, 5, 8, 9, 3, 1, 0, -5]





// 1. reverse() : ĐẢO NGƯỢC MẢNG
console.log("reverse:", student.reverse())

// 2. join(): NỐI CÁC PHẦN TỬ TRONG MẢNG THÀNH CHUỖI
console.log("join:", student.join())
console.log("join:", student.join(" "))

// 3. indexOf(value): TRẢ VỀ VỊ TRÍ CỦA PHẦN TỬ TRONG MẢNG CỦA VỊ TRÍ ĐẦU TIÊN 
console.log("indexOf:", student.indexOf("trung"))

// 4. lastIndexOf(value): TRẢ VỀ VỊ TRÍ CỦA PHẦN TỬ TRONG MẢNG CỦA VỊ TRÍ CUỐI CÙNG 
console.log("indexOf:", student.lastIndexOf("trung"))

// 5. push(): THÊM PHẦN TỬ VÀO CUỐI MẢNG
console.log("push:", student.push("HUYNH"))
console.log(student)

// 6. unshift(): THÊM PHẦN TỬ VÀO ĐẦU MẢNG
console.log("unshift:", student.unshift("TRAN CHI"))
console.log(student)

// 7. pop(): XÓA PHẦN TỬ CUỐI CÙNG TRONG MẢNG
console.log("pop:", student.pop())
console.log(student)

// 8. shift(): XÓA PHẦN TỬ ĐẦU TIÊN TRONG MẢNG
console.log("shift:", student.shift())
console.log(student)

// 9.concat(): NỐI CÁC MẢNG LẠI VỚI NHAU
console.log(student.concat(student1))

// 10. slice(): sao chép ra một mảng mới


// 10. SO SÁNH HAI MẢNG

// CÁCH 1: DÙNG JSON.stringify
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
const sameArray = JSON.stringify(array1) === JSON.stringify(array2);
console.log(sameArray)

// CÁCH 2: DÙNG IF ELSE VÀ VÒNG LẶP FOR

let isRequest

if (array1.length !== array2.length) {
    isRequest = false
} else {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            isRequest = false
            break
        }
        isRequest = true
    }
}
console.log(isRequest)
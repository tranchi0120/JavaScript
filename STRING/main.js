const myString = "Hello anh em minh la TRAN CHI"
const myStr = " tao la TRAN CHI   "

// 1. split : CHUYỄN MỘT CHUỖI THÀNH MẢNG 
console.log("split:", myString.split(","))

// 2. toLowerCase: CHUYỂN CHUỖI VỀ CHỮ IN THƯỜNG
console.log("toLowerCase:", myString.toLowerCase())

// 3. toUpperCase: CHUUYỂN CHUỖI VỀ IN HOA HẾT
console.log("toUpperCase:", myString.toUpperCase())

// 4. startsWith: KIỂM TRA ' CHỮ BẮT ĐẦU ' VÀ TRẢ VỀ TRUE OR FALSE 
console.log("startsWith:", myString.startsWith("Hello"))
console.log("startsWith:", myString.startsWith("hello"))

// 5.includes: KIỂM TRA CHUỖI CÓ CHỨA PHẦN TỬ NÀO HAY KO TRẢ VỀ TRUE OR FALSE
console.log("includes:", myString.includes("Hello"))
console.log("includes:", myString.includes("hello"))

// 6. indexof: KIỂM TRA VỊ TRÍ THỨ TỰ ĐẦU TIÊN CỦA CHUỖI
console.log("indexOf: ", myString.indexOf("a"))

// 7. lastIndexOf:   KIỂM TRA VỊ TRÍ CUỐI CÙNG CỦA CHUỖI  
console.log("lastIndexOf: ", myString.lastIndexOf("a"))

// 8. replace: THAY THẾ CHUỖI
console.log("replace: ", myString.replace("TRAN CHI", "KIM HUYỀN"))

// 9.repeat: NHAAN THÊM SỐ LẦN CỦA CHUỖI
console.log("repeat: ", myString.repeat(2))

// 10. slice: LẤY RA VỊ TRÍ CỦA PHẦN TỬ TRONG CHUỖI
console.log("slice: ", myString.slice(0, 9))
console.log("slice: ", myString.slice(0))
console.log("slice: ", myString.slice(-8))

// 11. trim: XÓA BỎ KHOẢNG TRỐNG GIỮA HAI ĐẦU CỦA ĐOẠN CHUỖI
console.log("strim: ", myStr.trim())

//11. trimStart: XÓA BỎ KHOẢNG TRỐNG Ở PHÍA TRUOSC CHUỖI
console.log("strimStart: ", myStr.trimStart())

//12. strimEnd: XÓA BỎ KHOẢNG TRỐNG Ở CUỐI CHUỖI
console.log("strimEnd: ", myStr.trimEnd())

// 12. chart:
console.log("chart: ", myString.charAt(1))
console.log("chart: ", myString.charAt(2))


// 15. substring: LẤY RA CÁC KÝ TỰ CỦA CHUỖI || VÀ SƯ KHÁC NHAU GIỮA substring và substr
console.log("substr:", myString.substring(1, 3))
console.log("substr:", myString.substr(1, 3))
console.log("substr:", myString.substring(1))
console.log("substr:", myString.substr(1))



// CÁC GIÁ TRỊ CỦA HÀM String
console.log(String(45))
console.log(String("áda21321"))
console.log(String(false))
console.log(String(true))
console.log(String(null))
console.log(String(NaN))



console.log(10 + 10)
console.log(10 + '10')
console.log('10' + 10)
console.log('10' + '10')



console.log(7 < 5)
console.log(null > undefined)

const isRick = true
const money = 100


if (!isRick) {
    // !true => false
    console.log("tao se di mua xe ")
} else if (money > 1000) {
    console.log("tao co 1000d")
} else {
    console.log("tao ngheo")
}
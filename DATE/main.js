const date = new Date()
    // console.log(date)

console.log(new Date())

// ----------------------------------- EX ----------------------------------------------------------------

// BÀI TẬP 1: VIẾT HÀM NHẬP VÀO NĂM SINH VÀ IN RA SỐ TUỔI

function getAge(year) {
    const now = new Date()
    const currentYear = now.getFullYear()
    console.log("currentYear: " + currentYear)

    return (currentYear - year)
}
console.log(getAge(2000))


// BÀI TẬP 2: VIẾT HÀM TÍNH THỜI GIAN ĐẾM LÙI TÍNH TỪ THỜI GIAN BẮT ĐẦU: VD: 30' => 0'

function countdown(minutes) {

    if (typeof minutes !== "number") return "moi ban nhap so phut vao"

    let seconds = minutes * 60

    const timer = setInterval(() => {
        seconds = seconds - 1;
        console.log("seconds: " + seconds)

        if (seconds === 0) {
            clearInterval(timer)
            console.log("stoped")
        }

    }, 1000)


}
console.log(countdown(0.1))

// BÀI TẬP 3: VIẾT HÀM CÓ TÊN LÀ TIMESINCE,
// INPUT: THỜI GIAN
// OUTPUT: SO SÁNH VÀ TÍNH VỚI THỜI GIAN HIỆN TẠI

function timeSince() {

}
// BÀI TẬP 1: ĐẢO NGƯỢC LẠI MỘT CHUỖI : VD: "TRAN CHI" => "CHI TRAN"

function reversString(str) {
    if (typeof str !== "string") return console.log("moi ban nhap chuoi vao")
    const newStr = str.split(" ") // ĐƯA CHUỖI THÀNH MỘT MẢNG 
    console.log(newStr)

    const newString = newStr.reverse().join(" ")
    console.log(newString)
}
reversString("tran chi")

// BÀI TẬP 2: ĐẢO NGƯỢC LẠI MỘT CHUỖI : VD: "TRAN CHI" => "IHCNART"
function reverseString(str) {
    const newStr = str
        .split(" ")
        .map((item) => item
            .split("")
            .reverse()
            .join(""))
    console.log(newStr)
    const result = newStr.join(" ")
    console.log(result)
}
reverseString("kim huyen")

// BÀI 3: IN HOA CÁC CHỮ CÁC ĐẦU TRONG MỘT CHUỖI; VD: "tran chi" => "Tran Chi"

function capitalizeWord(word) {

    let newWord = word.toLowerCase().charAt(0).toUpperCase() // charAt(0) : "chi" => "c"
    let otherWord = word.toLowerCase().slice(1) // splice(1): "chi" => "hi"
    return (`${newWord}${otherWord}`)

}
capitalizeWord("Tran Chi")

function capitalizeStr(value = "nguyen Le Kim huyen") {
    // tạo ra một mảng mới
    const result = value.split(" ")
        // lặp qua từng phần tử của mảng => đưa ra từng phần tử có chữ cái đầu viết Hoa và join() chuyển sang chuỗi
        .map(item => capitalizeWord(item))
        .join(" ")
    console.log("result:", result)
}

capitalizeStr()


// ---------------------------------------------------------------------------------------------------------------------- //   
// ex: GỘP CÁC MẢNG CON THÀNH MỘT MẢNG LỚN
const arr = [
    123,
    1,
    2,
    5, [5, 8, 9, [8, 5, 9, 70], 8, 9],
    10101,
    'fsdfsf',
    'asdasd',
    { name: 'tranchi' },
    [5, 6],
];
const newArr = arr.flat(3);
console.log('new array:', newArr);



console.log('----------------------------------');

function Count(string) {
    let count = 0;
    const des = 'uaoai';

    for (let i of string) {
        console.log(i);
        if (des.includes(i)) count += 1;
    }

    return count;
}
console.log('số chữ là:', Count('tranchi'));




console.log('----------------------------------');
// ex: TRUYỀN VÀO MỘT MẢNG Arr = [1,1,2,3,4,2,11,5,6,7,6,5,7,8,9,0,9,0,9,5] => output: [1,2,3,4,5,6,7,8,9]
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
            newArr.sort((a, b) => a - b);
        }
    }
    return newArr;
}
console.log(
    'NEWARR',
    unique([1, 1, 2, 3, 4, 2, 11, 5, 6, 7, 6, 5, 7, 8, 9, 0, 9, 0, 9, 5])
);




console.log('----------------------------------');
// const arr = [1,5,6,7,9,-5,-9,-7,1,8] => output: -5

function negative(arr) {
    const newArr = [...arr];
    let ArrayNew = newArr.filter((item) => item < 0);
    console.log(ArrayNew);

    const Max = ArrayNew.reduce((t, v) => (t > v ? t : v));
    // or using const Max = Math.max(...ArrayNew);
    console.log('Max:', Max);
}
negative([1, 5, 6, 7, 9, -5, -9, -7, 1, 8]);




console.log('----------------------------------');
// ex: TÁCH MẢNG THEO YÊU CẦU CỦA NUMBER ( SỐ 3) CHUYỀN VÀO ([1,2,3,4,5,6,7],3) => OUTPUT: [[1,2,3],[4,5,6],7]

function SliceArray(arr, number) {
    let newSliceArr = [];
    let index = 0;

    while (index < arr.length) {
        // tách mảng cha thành những mảng con
        console.log('chidlrenArr:', arr.slice(index, number + index));
        newSliceArr.push(arr.slice(index, number + index));
        index = index + number;
    }
    console.log('newSliceArr:', newSliceArr);
    return newSliceArr;
}
SliceArray([1, 2, 3, 4, 5, 6, 7], 3);




console.log('----------------------------------');
// cách 2:

function chunkArray(myArray, size) {
    var results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, size));
    }

    return results;
}

var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);
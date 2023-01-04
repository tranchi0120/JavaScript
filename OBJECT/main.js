const student = {
    name: 'tran chi',
    age: 38,
    country: 'DAK LAK',
};

const KeyStudent = Object.keys(student); // => TẠO RA MỘT MẢNG MỚI CHỨA CÁC "KEY" CỦA OBJECT BAN ĐẦU
console.log(KeyStudent);

const ValueStudent = Object.values(student); // => TẠO RA MỘT MẢNG MỚI CHỨA CÁC "VALUE" CỦA OBJECT BAN ĐẦU
console.log(ValueStudent);

// => TẠO RA "MỘT MẢNG" CHỨA "CÁC MẢNG CON". MÀ MẢNG CON LÀ CÁC CẶP "KEY" VÀ "VALUE" TƯƠNG ỨNG
const entrisStudent = Object.entries(student);
console.log(entrisStudent);



console.log('--------------------------------');
// phuowng thuc  assign()  : noi object
const a = {
    firstName: 'tran',
};
const b = {
    lastname: 'chi',
};
const c = Object.assign(a, b);
console.log(c);

const d = { ...a, ...b };
console.log('d:', d);



console.log('--------------------------------');
// phương thức seal(): có thể chỉnh sửa nhưng ko được thêm giá trị vào object
const obj = {
    name: "tran chi"
}

const newobj = Object.seal(obj)
console.log("new name:", obj.name = "kim huyen")
console.log("add age:", obj.age = 18) // khong them duoc vao object "obj"
console.log(obj)

// --------------------------------------------------
console.log('--------------------------------');
// clone 1 object phức tạp
const arr3 = {
    name: 'tran chi',
    newAge: {
        age: 118,
        male: {
            mal: 'string',
        },
        chi: {
            hoten: [1, 2, 3, 4],
        },
    },
};

console.log(arr3);

const arr4 = JSON.parse(JSON.stringify(arr3));
console.log('arr4', arr4);
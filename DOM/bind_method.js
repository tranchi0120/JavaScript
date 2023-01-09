// ---------------------------------- bind() -------------------------
console.log('----------------------- bind() -------------------------------');

// ex1:
this.name = 'tran chi';
this.age = 18;

const teacher = {
    name: 'kim huyen',
    age: 20,
    getfullName(data1, data2) {
        console.log(data1, data2);
        return `${this.name} ${this.age}`;
    },
};
// case 1:
console.log(teacher.getfullName('d1', 'd2'));

// case 2:
const gettechName = teacher.getfullName.bind(teacher);
console.log(gettechName('data1', 'data2'));

// ex2

const student = {
    name: 'kim huyen',
    age: 20,
    getfullName() {
        console.log(`${this.name} ${this.age}`);
    },
};

const button = document.querySelector('.button');
button.onclick = student.getfullName.bind(student);
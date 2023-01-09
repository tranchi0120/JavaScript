const Iphone = {
  // thuoc tinh - property
  name: 'Iphone 7',
  color: 'Pink',
  weight: 300,

  // phuong thuc - method
  takePhoto() {
    console.log(this);
  },
  objChild: {
    name: 'object child',
    methodChild() {
      console.log(this);
    },
  },
};

// console.log(Iphone.takePhoto());
Iphone.objChild.methodChild();

// ----------------------------------
console.log('------------------------------------------------------');

function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function () {
    console.log('rung.....', this);
  };
}

const honda = new Car('Exciter', 'black', 110);
console.log(honda.run());

// ----------------------------------
console.log('------------------------------------------------------');
const btn = document.querySelector('.button');

btn.onclick = function () {
  console.log(this);
};



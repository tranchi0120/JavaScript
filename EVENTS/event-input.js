const input = document.querySelector('.input');
// ---------- Event Form  -------------
// 1. keydown

input.addEventListener('keydown', function (e) {
  console.log('keydown:', e.key);
});

// 2. keyup : khi nhấn phím rồi thả ra
input.addEventListener('keyup', function (e) {
  console.log('keyup:', e.key);
});

// 3. keypress: xảy ra khi nhấn phím và xử dụng được e.preventDefault()
input.addEventListener('keypress', function (e) {
  // e.preventDefault();
  console.log('keypress:', e.key);
});

// => sự khác nhau giữa keydown and keypress là:
// + keypress: xử dụng được e.preventDefault() ( ngăn chặn hành vi mặc định ) còn keydown thì ko sử dụng được
// + keypress: không thể sử dụng các phím như delete,home,ctrl..... trên bàn phím

// 4. change: xảy ra khi nhấn gõ phím vào input xong rồi nhấn enter hoặc rê chuột ra ngoài ô input
input.addEventListener('change', function (e) {
  console.log('change:', e.key);
});

// 5.focus: khi nhấn vào input
input.addEventListener('focus', function (e) {
  console.log('focus');
});

// 6.blur: khi đưa chuột ra ngoài <=> ngược lại với focus
input.addEventListener('blur', function (e) {
  console.log('blur');
});

// 7. submit
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  // this == e.target
  e.preventDefault();
  console.log(this.elements);
  console.log(this.elements['username']);

});

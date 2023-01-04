function loading() {
    const template = ` <div class="main">
  <img
    class="image"
    src="https://images.unsplash.com/photo-1671642543979-ecbc42fa532f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
    alt=""
  />
  <div class="box">
    <div class="title">Hello word</div>
    <p class="content">chao mung nam moi 2023</p>
  </div>
</div>`;
    document.body.insertAdjacentHTML('afterbegin', template);
}
loading();

const timer = setInterval(() => {
    const item = document.querySelector('.main');
    if (item) item.parentNode.removeChild(item);
    loading();
}, 4000);


// --------------------------- vi du -------------------
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('click');
});

button.addEventListener('click', (e) => {
    console.log('click1');
});

const form = document.querySelector('.form');

form.addEventListener('click', (e) => {
    console.log('click form');
});

// -----------------------------------
// xử lý event chuyển qua background qua lại giữa các button
const tabContent = document.querySelectorAll('.item-content');
const tabItem = document.querySelectorAll('.item-btn');

[...tabItem].forEach((item) => item.addEventListener('click', handleOnchange));

function handleOnchange(event) {
    console.log(event.target);

    // xoa cac class co ten la: active-btn ra khoi button
    [...tabItem].forEach((item) => item.classList.remove('active-btn'));

    // add class active-btn vao button
    event.target.classList.add('active-btn');

    // dataset
    const tabNumber = event.target.dataset.tab;
    console.log(tabNumber);

    [...tabContent].forEach((item) => item.classList.remove('active-content'));
    [...tabContent][tabNumber - 1].classList.add('active-content');
}
const Item = document.getElementsByClassName('item');
console.log(Item);

const newItem = Item.forEach(element => {
    console.log(element);
});
console.log(newItem);





const Li = document.querySelectorAll('li');
console.log(Li);

const NewLi = document.getElementsByTagName('li');
console.log(NewLi);

const Content = document.querySelector('.content');

const AllClass = document.querySelector('.title');

// thay thế class
console.log(AllClass.className);
AllClass.className = '123 456';
// ---------------------------------------------
Content.classList.add('active');

Content.classList.remove('content');

const card = document.createElement('div');
card.classList.add('card');

document.body.appendChild(card);

const image = document.createElement('img');
image.classList.add('img-content');

image.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
);

card.appendChild(image);



// ------------------------------------------------
const content = document.createElement('span');

content.classList.add('active');

card.appendChild(content);

content.textContent = 'hello anh em';

card.insertAdjacentText('beforebegin', 'begin');

const strong = document.createElement('strong');
strong.classList.add('bold');
strong.setAttribute('style', 'display: block');
strong.textContent = ' day la the strong';

card.insertAdjacentElement('beforebegin', strong);
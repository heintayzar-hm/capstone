/*
  pop-up mobile menu section
*/

const humburger = document.querySelector('#humburger');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuShow = () => {
  mobileMenu.style.display = 'block';
};

const mobileMenuHide = () => {
  mobileMenu.style.display = 'none';
};

humburger.addEventListener('click', mobileMenuShow);

const mobileMenuImg = document.querySelector('.mobile-menu-img');

mobileMenuImg.addEventListener('click', mobileMenuHide);

/*
  Featured speakers section
*/

const people = [{
  id: 1,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people1.jpg',
},
{
  id: 2,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people2.jpg',
},
{
  id: 3,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people3.jpg',
},
{
  id: 4,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people4.jpg',
},

{
  id: 5,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people5.jpg',
},

{
  id: 6,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people6.jpg',
},

{
  id: 7,
  name: 'Hein Tay Zar',
  university: 'University Of Information Technology',
  biography: 'From the University Of Information Technology, studied computer science and lacks motivation to continue so he joined Kpop Conferrence. It is actually great.',
  image: '../resources/people1.jpg',
},
];

const featuredSpeakers = document.querySelector('.featured-speakers');
// make ul tag and add class  and append it to featuredSpeakers
const CHESSBOARD_SRC = '../resources/chessboard.svg';

const peopleUl = document.createElement('ul');

peopleUl.classList.add('featured-speakers-ul');

featuredSpeakers.insertBefore(peopleUl, featuredSpeakers.children[2]);

// generate a person and append it to featured speakers
const generatePerson = ({
  id, name, university, biography, image,
}) => {
  // make li tag and append it to ul
  const peopleLi = document.createElement('li');
  peopleUl.appendChild(peopleLi);

  // first div
  // make div tag and append it to li also add class
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('full-image');
  peopleLi.appendChild(firstDiv);

  // make chessboard image and append it to div
  const chessboard = document.createElement('img');
  chessboard.src = CHESSBOARD_SRC;
  chessboard.setAttribute('alt', 'chessboard');
  chessboard.setAttribute('id', 'board');
  firstDiv.appendChild(chessboard);

  // make people image and append it to div
  const peopleImg = document.createElement('img');
  peopleImg.src = image.toString();
  peopleImg.setAttribute('alt', `people${id}`);
  peopleImg.classList.add('person-img');
  firstDiv.appendChild(peopleImg);

  // first div
  // make div tag and append it to li
  const secondDiv = document.createElement('div');
  peopleLi.appendChild(secondDiv);

  // make h3 tag and append it to div
  const h3 = document.createElement('h3');
  h3.innerText = `${name}`;
  secondDiv.appendChild(h3);
  // make span tag and append it to div
  const span = document.createElement('span');
  span.innerText = `${university}`;
  secondDiv.appendChild(span);
  // make p tag and append it to div
  const p = document.createElement('p');
  p.innerText = `${biography}`;
  secondDiv.appendChild(p);
};

const showMore = document.querySelector('#show-more');

const getInnerWidth = () => window.innerWidth;

const end = document.createElement('span');
end.innerText = 'This is the end';
end.classList.add('hidden-if-large');
end.setAttribute('id', 'end');
end.style.padding = '5px';

const endShow = () => {
  end.style.display = 'block';
};

const endHide = () => {
  end.style.display = 'none';
};

const showMoreShow = () => {
  showMore.style.display = 'block';
};

const showMoreHide = () => {
  showMore.style.display = 'none';
};
const mobilePeopleShow = () => {
  peopleUl.innerHTML = '';
  for (let i = 0; i < 2 && i < people.length; i += 1) {
    generatePerson(people[i]);
  }
  showMoreShow();
  endHide();
};

const desktopPeopleShow = () => {
  peopleUl.innerHTML = '';
  for (let i = 0; i < 6 && i < people.length; i += 1) {
    generatePerson(people[i]);
  }
  endHide();
  showMoreHide();
};

const onLoadPeopleShow = () => {
  let elementIndex = peopleUl.querySelectorAll('li').length;
  const leftElement = people.length - peopleUl.querySelectorAll('li').length;
  for (let i = 0; i < 4 && i < leftElement; i += 1) {
    generatePerson(people[elementIndex]);
    elementIndex += 1;
  }
};

if (getInnerWidth() < 760) {
  mobilePeopleShow();
} else {
  desktopPeopleShow();
}

// const determineDevices = () => {
//   if (getInnerWidth() > 760) {
//     desktopPeopleShow();
//   } else {
//     mobilePeopleShow();
//   }
// };

// window.addEventListener('resize', determineDevices);

const displayAllPeople = () => {
  onLoadPeopleShow();
  if (people.length === peopleUl.querySelectorAll('li').length) {
    endShow();
    showMoreHide();
    featuredSpeakers.append(end);
  }
};
showMore.addEventListener('click', displayAllPeople);

// animation

const scrollView = (link, section) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
};

scrollView(document.querySelector('.main-program-link'), document.getElementById('main-program'));
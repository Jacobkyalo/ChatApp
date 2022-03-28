//making the icons to display no functionality

const home = document.querySelector('#home');
const call = document.querySelector('#call');
const archive = document.querySelector('#archive');
const chaticon1 = document.querySelector('#chat-icon1');
const chaticon2 = document.querySelector('#chat-icon2');
const chaticon3 = document.querySelector('#chat-icon3');
const chaticon4 = document.querySelector('#chat-icon4');
const chaticon5 = document.querySelector('#chat-icon5');
const chaticon6 = document.querySelector('#chat-icon6');
const contactPerson = document.querySelector('.contact-person');

//adding event listeners

home.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

call.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

archive.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon1.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon2.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon3.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon4.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon5.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

chaticon6.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

contactPerson.addEventListener('click', (e) => {
  e.preventDefault();
 alert('No functionality');
});

//initializing randomuser api to generate random chat users

async function getUsers() {
  const response = await fetch('https://randomuser.me/api/');
  const responseData = await response.json();
  const user = responseData.results[0];
  console.log(user);  
  generateUsers(user);
}

//function to generate users

function generateUsers(user) {
  //getting images by id
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const image4 = document.getElementById('image4');
  const image5 = document.getElementById('image5');
  const image6 = document.getElementById('image6');

  //setting src attribute to the images using randomuser api
  image1.setAttribute('src', `${user.picture.medium}`);
  image2.setAttribute('src', `${user.picture.medium}`);
  image3.setAttribute('src', `${user.picture.medium}`);
  image4.setAttribute('src', `${user.picture.medium}`);
  image5.setAttribute('src', `${user.picture.medium}`);
  image6.setAttribute('src', `${user.picture.medium}`);

    //getting names by id
  const name1 = document.getElementById('user-name1');
  const name2 = document.getElementById('user-name2');
  const name3 = document.getElementById('user-name3');
  const name4 = document.getElementById('user-name4');
  const name5 = document.getElementById('user-name5');
  const name6 = document.getElementById('user-name6');

    //adding user name using randomuser api
  name1.innerText = `${user.name.first} `;
  name2.innerText = `${user.name.last} ${user.name.first}`;
  name3.innerText = `${user.name.first} `;
  name4.innerText = `${user.name.last} `;
  name5.innerText = `${user.name.first} ${user.name.last}`;
  name6.innerText = `${user.name.last} `;

}

getUsers();
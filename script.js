// 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const numbersBox = document.querySelector(".numbers");
// for (let i = 100; i >= 50; i -= 10) {
//   const p = document.createElement("p");
//   p.textContent = i;
//   numbersBox.append(p);
// }

// 2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const stringsContainer = document.querySelector(".strings_container");
// const stringsArray = ["BMW", "Audi", "Toyota", "Subaru", "Infiniti"];

// for (let i = 0; i < stringsArray.length; i++) {
//   const p = document.createElement("p");
//   p.textContent = stringsArray[i];
//   stringsContainer.append(p);
// }

// 3 Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

// const user_container = document.querySelector(".user_container");
// const users = [
//   { name: "Yelizar", age: 39, lastName: "Tatsenko" },
//   { name: "Tetiana", age: 52, lastName: "Bukreeva" },
//   { name: "Jana", age: 38, lastName: "Nefedova" },
//   { name: "Anna", age: 24, lastName: "Karamova" },
// ];
// const filteredUsers = [];
// let usersHTML = '';
// for (let index = 0; index < users.length; index++) {
// const userAge = users[index].age;
//   if (userAge >= 18) {
//     filteredUsers.push(users[index]);
//   }
// }
// filteredUsers.forEach((eachUser) => {
//   usersHTML += 
//   `<div class="eachUser">
//     <p>User fullName: ${eachUser.name} ${eachUser.lastName}</p>
//     <p>User age: ${eachUser.age}</p>
//   </div>`;
// });
// user_container.insertAdjacentHTML("afterbegin", usersHTML);


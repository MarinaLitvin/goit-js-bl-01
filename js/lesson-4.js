// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body');
// console.log(bodyEl);

// Додавання розмітки:

// bodyEl.textContent = "hello";
// bodyEl.innerHTML = "<h1>hello</h1>";
// bodyEl.insertAdjacentHTML("beforeend", <h1>hello</h1>);
// const title = document.createElement("h1");
// title.textContent = "hello";
// bodyEl.append(title);

// Додавання класів:

// bodyEl.style.backgroundColor = "red";
// bodyEl.classList.add('active');

// 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector('#title');
// console.log(titleEl);

// // 3 - отримай елемент class="list" і виведи його в консоль;

// const listEl = document.querySelector('.list');
// console.log(listEl);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const elements = document.querySelectorAll("[data-topic]");
// console.log(elements);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const firstElement = document.querySelector("[data-topic]");
// console.log(firstElement);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const elements = document.querySelectorAll("[data-topic]");
// console.log(elements[elements.length - 1]);
// console.log(elements.at(-1));

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const h1 = document.querySelector("h1");
// console.log(h1.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const h3 = document.querySelectorAll("h3");
// console.log(h3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// const headings = document.querySelectorAll("h3");
// headings.forEach(heading => {
//     heading.classList.add("active");
// });

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// const navigationItem = document.querySelector(
//   'li[data-topic="navigation"]'
// );
// console.log(navigationItem);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// navigationItem.style.backgroundColor = "yellow";


// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const paragraph = navigationItem.querySelector("p");
// paragraph.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const element = document.querySelector(
//   `[data-topic="${currentTopic}"]`
// );
// console.log(element);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// element.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const heading = document.querySelector(".completed");
// console.log(heading);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// heading.closest("li").remove(); // шукає на всіх
// heading.parentElement.remove(); // шукає тільки батька

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const h1 = document.querySelector("h1");
// const p = document.createElement("p");
// p.textContent = "Об'єктна модель документа (Document Object Model)";
// h1.after(p);

// h1.insertAdjacentHTML(
//   "afterend",
//   "<p>Об'єктна модель документа (Document Object Model)</p>"
// );


// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const list = document.querySelector("ul");

// const li = document.createElement("li");
// const h3 = document.createElement("h3");
// const p = document.createElement("p");

// h3.textContent = "Властивість innerHTML";

// p.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// li.append(h3, p);

// list.append(li);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const list = document.querySelector("ul");

// const markup = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>
// `;

// list.insertAdjacentHTML("beforeend", markup);

// 20 - очисти список

// const list = document.querySelector("ul");

// list.innerHTML = "";

// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).


// const numberContainer = document.querySelector(".number-container");

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// // створення блоків:

// for (let i = 0; i < 100; i++) {
//   const number = randomNumber();

//   const numberElement = document.createElement("div");
// // додавання класу number
//   numberElement.classList.add("number");
// //  додавання класів even, odd
//   if (number % 2 === 0) {
//     numberElement.classList.add("even"); // зелений фон
//   } else {
//     numberElement.classList.add("odd"); // жовтий фон
//   }
// // наповнення текст контента
//   numberElement.textContent = number;
// // наповнення контейнера
//   numberContainer.append(numberElement);
// }

// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
const usernameInput = document.querySelector(".js-username-input");
const checkbox = document.querySelector(".js-policy-checkbox");
const usernameOutput = document.querySelector(".js-username-output");

const defaultName = usernameOutput.textContent;

// 1. INPUT
usernameInput.addEventListener("input", handleInput);

function handleInput (event) {
  const value = event.currentTarget.value.trim();

  // success / error
  if (value.length >= 6) {
    usernameInput.classList.add("success");
    usernameInput.classList.remove("error");
  } else {
    usernameInput.classList.add("error");
    usernameInput.classList.remove("success");
  }
    
    // if (value.length >= 6) {
    //   usernameInput.classList.toggle("success", true);
    //   usernameInput.classList.toggle("error", false);
    // } else {
    //   usernameInput.classList.toggle("success", false);
    //   usernameInput.classList.toggle("error", true);
    //   }

  // Ім'я у span
  usernameOutput.textContent = value || defaultName;
}

// 2. FOCUS
usernameInput.addEventListener("focus", event => {
  const value = event.target.value.trim();

usernameInput.style.outline =
  value === "" ? "3px solid red" : "3px solid green";
});

    // if (value === "") {
    //   usernameInput.style.outline = "3px solid red";
    // } else {
    //   usernameInput.style.outline = "3px solid green";
    // }


// 3. BLUR
usernameInput.addEventListener("blur", event => {
  const value = event.target.value.trim();

  if (value === "") {
    usernameInput.style.outline = "3px solid red";
  } else {
    usernameInput.style.outline = "3px solid lime";
  }
});

// 4. SUBMIT
form.addEventListener("submit", handleSubmit);

function handleSubmit (e) {
  e.preventDefault();
  
  const {inputValue, accept} = e.target.elements;

    //   const inputValue = e.target.elements.userName.value.trim();
    //   const accept = checkbox.checked;

  if (inputValue === "") {        // if (!inputValue)
    alert("Please enter your name");
    return;
  }

  if (!accept) {
    alert("Please accept the privacy policy");
    return;
  }

  console.log({userName: inputValue});

  // Очищення форми
  e.target.reset();
  usernameOutput.textContent = defaultName;

  // Скидаємо outline та класи
  usernameInput.style.outline = "";
  usernameInput.classList.remove("success", "error");
}
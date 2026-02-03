
const categories = document.querySelectorAll("#categories .item");

console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});


const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.getElementById("ingredients");

const elements = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

ingredientsList.append(...elements);


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg",
    alt: "Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg",
    alt: "Horses Running",
  },
];

const gallery = document.getElementById("gallery");

const galleryMarkup = images
  .map(
    (img) => `
      <li>
        <img src="${img.url}" alt="${img.alt}">
      </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);


let counterValue = 0;

const value = document.getElementById("value");

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

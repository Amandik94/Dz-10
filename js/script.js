// Домашние задание №1

const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`);

// Домашние задание №2

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Название: ${book.title}, Автор: ${book.author}, Страниц: ${book.numberOfPages}, Жанр: ${book.genre}`);
    console.log(`Награды:`);
    for (let j = 0; j < book.awards.length; j++) {
      console.log(`  - ${book.awards[j]}`);
    }
    console.log("---------------");
  }

//   Домашние задание №3

function calculateAveragePages(books) {
    if (books.length === 0) return 0;
    
    let totalPages = 0;
    
    for (let i = 0; i < books.length; i++) {
      totalPages += books[i].numberOfPages;
    }
    
    return totalPages / books.length;
  }

const averagePages = calculateAveragePages(books);
console.log(`Среднее количество страниц: ${averagePages}`);

// Домашние задание №4

function repeatString(str, n) {
  if (n <= 0) return "";

  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

const inputString = prompt("Введите слова:");
const repetitions = +prompt("Количество повторов:");

const output = repeatString(inputString, repetitions);
console.log(output);

// Домашние задание №5

function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }

  return sum / numbers.length;
}

const input = prompt("Введите числа через запятую:");
const number = input.split(",").map(Number);

const average = calculateAverage(number);
console.log("Среднее значение: " + average);


// Домашние задания №6

function countEvenNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          count++;
      }
  }
  return count;
}

const inputs = prompt("Введите числа:");
const outputs = countEvenNumbers(inputs);
console.log("Количество чётных чисел:", outputs);

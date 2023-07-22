const express = require("express");
const app = express();
const port = 3030;

// Route 1: /numbers/primes
app.get("/numbers/primes", (req, res) => {
  const primes = getPrimes(50);
  res.json({ numbers: primes });
});

// Route 2: /numbers/odd
app.get("/numbers/odd", (req, res) => {
  const oddNumbers = getOddNumbers(50);
  res.json({ numbers: oddNumbers });
});

// Route 3: /numbers/fib
app.get("/numbers/fib", (req, res) => {
  const fibonacciNumbers = getFibonacciNumbers(50);
  res.json({ numbers: fibonacciNumbers });
});

// Route 4: /numbers/rand
app.get("/numbers/rand", (req, res) => {
  const randomNumbers = getRandomNumbers(50, 10);
  res.json({ numbers: randomNumbers });
});

// Helper function to generate prime numbers
function getPrimes(limit) {
  const primes = [];
  for (let num = 2; primes.length < limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Helper function to generate odd numbers
function getOddNumbers(limit) {
  const oddNumbers = [];
  for (let num = 1; num <= limit; num += 2) {
    oddNumbers.push(num);
  }
  return oddNumbers;
}

// Helper function to generate Fibonacci numbers
function getFibonacciNumbers(limit) {
  const fibonacciNumbers = [0, 1];
  while (
    fibonacciNumbers[fibonacciNumbers.length - 1] +
      fibonacciNumbers[fibonacciNumbers.length - 2] <=
    limit
  ) {
    fibonacciNumbers.push(
      fibonacciNumbers[fibonacciNumbers.length - 1] +
        fibonacciNumbers[fibonacciNumbers.length - 2]
    );
  }
  return fibonacciNumbers;
}

// Helper function to generate random numbers
function getRandomNumbers(limit, count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * (limit + 1)));
  }
  return randomNumbers;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/* Sieve of Eratosthenes is an
 * Ancient greek algorithm for finding all prime numbers
 * up to a given limit n.
 * Time & space complexity: O(N log(log N)) and O(n) respectively
*/
"use strict";

// n is the given limit to find all prime numbers less than n (100 in this example)
let n = 100;

function sieveOfEratosthenes(n) {
  // Create an array filled with true values and set the first two indexes to false
  let isPrime = new Array(n + 1).fill(true);
  console.log("filling a new array with n+1");
  isPrime[0] = false;
  isPrime[1] = false;

  // Primary loop that finds prime numbers and crosses out the multiples
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i] === true) {
      console.log(`Found prime: ${i}, crossing out multiples starting from ${i * i}`);
      // Cross out all multiples
      for (let j = i * i; j <= n; j += i) {
        console.log(j + " is false (multiple of " + i + ")");
        isPrime[j] = false;
      }
    }
  }

  // Collects all of the prime numbers
  console.log("Collecting all prime numbers..");
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i] === true) {
      primes.push(i);
    }
  }

  // Print out all of the prime numbers
  console.log("All primes up to ", n + ": ", primes);
  return primes;
}

// call function
sieveOfEratosthenes(n);

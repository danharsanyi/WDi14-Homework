// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all
// prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//
// Do this in Javascript!

var eratosthenes = function(valueOne, valueTwo) {

  for(i = valueOne; i <= valueTwo; i++ ) {
    console.log(i)
  }
}


eratosthenes(1, 15)

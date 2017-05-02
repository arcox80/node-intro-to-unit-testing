const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return "fizz-buzz" if divisible by 15', function() {
    const normalCases = [15, 30, 45];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return "buzz" if divisible by 5', function() {
    const normalCases = [5, 10, 20];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

  it('should return "fizz" if divisible by 3', function() {
    const normalCases = [3, 6, 9];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should return a number if not divisible by 3, 5, or 15', function() {
    const normalCases = [1, 7, 19];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input);
    });
  });

  it('should raise an error if input is not a number', function() {
    const badInputs = ['a', '5', false];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});

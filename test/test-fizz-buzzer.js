// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    
     // test the normal case
     it('should be divisible by 3 or 5', function(){
        const normalCases = [
            {a: 3, expected: 'fizz'},
            {a: 5, expected: 'buzz'},
            {a: 15, expected: 'fizz-buzz'}
          ];
     // for each set of inputs (a, b), `fizzbuzzer` should produce the expected value
     normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.expected);
      });           
     });
     it('should raise error if arguments not numbers', function() {
        // range of bad inputs where not numbers
        const badInputs = [
        'a', '1', false,
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input);
          }).to.throw(Error);
        });
      });        
});
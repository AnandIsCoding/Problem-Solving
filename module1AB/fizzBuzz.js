// **Fizz Buzz**

function fizzBuzz(n) {
    const result = [];
    if (typeof n !== 'number' || Number.isNaN(n) || n <= 0) {
        return 'Please enter a valid positive number';
    }
    for (let i = 1; i <= n; i++) {
        switch(true){
            case i % 3 === 0 && i % 4 === 0:
               result.push('FizzBuzz')
               break
            case i % 3 === 0 :
                result.push('Fizz')
                break;
            case i % 4 === 0:
                result.push('Buzz')
                break
            default:
                result.push(i.toString())
                break
        }
    }

    return result;
}
console.log(fizzBuzz(12))   
console.log(fizzBuzz('b'))

// Do not modify the below lines
module.exports = { fizzBuzz };


//output
//                  [
//                      '1',    '2',
//                      'Fizz', 'Buzz',
//                      '5',    'Fizz',
//                      '7',    'Buzz',
//                      'Fizz', '10',
//                      '11',   'FizzBuzz'
//                    ]
//                    Please enter a valid positive number
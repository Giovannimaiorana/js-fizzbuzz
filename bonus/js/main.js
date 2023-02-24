const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.append(square);

    if (i % 3 == 0 && i % 5 == 0) {
     const fizzBuzzElement = "FizzBuzz";
     square.append(fizzBuzzElement);
     square.classList.add('fizzBuzz')


    } else if (i % 3 == 0) {
      const fizzElement = "Fizz";
      square.append(fizzElement);
      square.classList.add('fizz')

    } else if (i % 5 == 0) {
      const buzzElement = "Buzz";
      square.append(buzzElement);
      square.classList.add('buzz')
    } else {
      square.append(i);
    }

  }
  
   

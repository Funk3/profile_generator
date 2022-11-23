const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like to do? ', (answer2) => {
    rl.question('What is your favourite genre of music? ', (answer3) => {
      console.log(`Your name is ${answer1}\nYou like to ${answer2}\nYour favourite music is ${answer3}`)
      rl.close()
    })
  })
});


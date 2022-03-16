## The Odin Project: Rock Paper Scissors
Simple Javascript implementation of the [Rock-Paper-Scissors](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) 
game from The Odin Project **Foundations** section.
### Assignment
- Begin with a function called `computerPlay()` that will randomly return either 'Rock', 'Paper' or 'Scissors'.
- Write a function `playRound()` that plays single round of Rock-Paper-Scissors. The function should take two parameters - `playerSelection` and `computerSelection`
and then return a string that declares the winner of the round like so: `You lose! Paper beats rock!`. Make your function's `playerSelection` parameter case-insensitive.
- Write a new function called `game()`. Call the `playRound()` function inside of this one to play a 5 round  game that keeps
score and reports a winner or loser at the end. You should be using `console.log()` to display the results of each round and the winner at the end.
- Use `prompt()` to get input from the user.

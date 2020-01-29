# quiz

# user experience
This application is a coding quiz relying on JavaScript logic and the jQuery library. The quiz is 7 
questions and you will recieve 10 seconds per question. The score variable will tick up by 10 for every 
correct answer, and the timer will lose 5 seconds should you answer incorrectly. Upon finishing the quiz,
whether it be by running out of time or answering all 7 questions, the user will be prompted to enter 
their name which, in the event that it is higher than at least one of the 3 scores displayed, the users 
name input along side the score they recieved will appear in the highscore leaderboard. Should the user desire to clear the leaderboard the clear score button will do just that. Finally, once completed with the quiz should the user want to try for a better score the restart button will bring them back to the start screen.

# structure
My main goal was to keep the html to a minimum and let the JavaScript do the heavy lifting. This is a 
pretty straight forward application that utilizes click events to restructure the html between questions 
and conditioal statements to effect the time and score variables.
# quiz

## user experience

This application is a coding quiz relying on JavaScript logic and the jQuery library. The quiz is 7 
questions and you will recieve 10 seconds per question. The score variable will tick up by 10 for every 
correct answer, and the timer will lose 5 seconds should you answer incorrectly. Upon finishing the quiz,
whether it be by running out of time or answering all 7 questions, the user will be prompted to enter 
their name which, in the event that it is higher than at least one of the 3 scores displayed, the users 
name input along side the score they recieved will appear in the highscore leaderboard. Should the user 
desire to clear the leaderboard the clear score button will do just that. Finally, once completed with 
the quiz, should the user want to try for a better score, the restart button will bring them back to the 
start screen.

![user interface](/images/ui.jpg)

## structure

My main goal was to keep the html to a minimum and let the JavaScript do the heavy lifting. The 
application begins with the first initial click of the go button. Empty high scores are stored in local 
storage, the timer begins and the question div appears.

![go](https://user-images.githubusercontent.com/5816571573379550-74c4cd80-4290-11ea-87b2-c52649545b0e.JPG)


This is a pretty straight forward application that utilizes click events to restructure the html between 
questions and conditioal statements to effect the time and score variables. Highscores are stored in 
localstorage and your 3 top scores will be displayed in descending order. The logic works by incrementing 
a clickCount variable every time the next button is pushed. From there it determines if the answer was 
correct or inncorrect, and issues the approriate response. 

![user interface](/images/next.jpg)

Once the final question is submited or the time runs out the stop() function is called. The stop function 
prompts you to enter your name then runs through its logic to determine if and where you should be placed 
on the board.

![stop](https://user-images.githubusercontent.com/58165715/73379761-db49eb80-4290-11ea-86cb-ad21f0c86e5b.JPG)


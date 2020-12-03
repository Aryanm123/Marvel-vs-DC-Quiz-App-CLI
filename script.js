const chalk = require('chalk');
const readlineSync   = require('readline-sync');
const  questionC = chalk.bold.cyan;
const answerC = chalk.bold.white;
const mainQuesC = chalk.bold.greenBright;
let dc = {
	1:["Exactly How many Earths are there? :    " ,  "infinite"],
	2:["In what year was DC Comics Created? :    " ,  "1934"],
	3:["Superman originated from which planet? :    " ,  "krypton"],
	4:["Who is the Son of Bruce Wayne? :    " ,  "Damien"],
	5:["Who was the 1st Robin? :    " ,  "Grayson"],
	6:["Cicada is a Villain of which Flash movie (1,2,3,4)? :    " ,  "3"],
	7:["Heroes Captain Marvel and Shazam are essentially the same person? (true/false)  :    " ,  "True"],
	8:["Who is the biggest enemy of Doomsday? :    " ,  "Superman"],
	9:["Elongated Man is real good friends with what Superhero? :    " ,  "flash"],
	10:["There are 2 Green Arrows, who became the 2nd one? :    " ,  "Connor "],
};
let marvel = {
	1:["Which year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? :    " ,  "2008"],
	2:["What is Captain America's shield made of? :    " ,  "adamantium"],
	3:["What was the alien race Loki sends to invade Earth in The Avengers? :    " ,  "chitauri"],
	4:["What did Peggy Carter promise to Steve Rogers (Captain America) before he crashed Red Skull's bomber? :    " ,  "dance"],
	5:["How many Infinity Stones are said to exist in the Marvel Cinematic Universe? :    " ,  "6"],
	6:["How does Yondu control his deadly hovering arrow? :    " ,  "whistle"],
	7:["About which city do Hawkeye and Black Widow often reminisce? :    " ,  "budapest"],
	8:[" What is the name of the little boy Tony befriends while stranded in the Iron Man 3 :    " ,  "harley"],
	9:["Who killed Loki in Avengers Infinity War :    " ,  "thanos"],
	10:["Who killed Tony Stark’s parents? :    " ,  "bucky"],
	
};


// console.log(questionC('Question color'));
// console.log(answerC('Answer color'));
console.log(mainQuesC('	 Hello Visitor !! , this quiz is made by Aryan Maheshwari'));
console.log()
console.log(mainQuesC("	 Are you a true DC or Marvel fan? , then prove it by scoring maximum points (10)"))
console.log()
console.log(mainQuesC("	 Answering each question right would get you 1 point"))
console.log()
console.log()
function askQues(name){
	if(name.toLowerCase() == 'dc'){
		for(i=1;i<=10;i++){
			let quesNum = dc[i] ;
			let guess = readlineSync.question("Q"+i+". "+quesNum[0]);
			if(guess.toLowerCase() === quesNum[1]){
				console.log("Correct answer keep going ");
				console.log()

				score++;
			}
			else{

				console.log("Oops wrong answer")
				console.log()
			}
		}
		
	}
	else{
		for(i=1;i<=10;i++){
			let quesNum = marvel[i] ;
			let guess = readlineSync.question("Q"+i+". "+quesNum[0]);
			if(guess.toLowerCase() === quesNum[1]){
				console.log("Correct answer keep going ");
				console.log()
				score++;
			}
			else{

				console.log("Oops wrong answer")
				console.log()
			}
		}
		
	}

	console.log(questionC("Your final score is "+score+" out of 10"));
	let choice  = readlineSync.question("Do you wish to see the answers ?");
	console.log()
	if(choice.toLowerCase() === "yes"){
		if(name.toLowerCase() == "marvel"){
			console.log(answerC(" Q1 - 2008 , Q2 - Adamantium , Q3 - Chitauri , Q4 - Dance "))
			console.log(answerC(" Q5 - 6 , Q6 - Whistle , Q7 - Budapest , Q8 - harley "))
			console.log(answerC(" Q9 - Thanos , Q10 - Bucky "))
		}
		else{
			console.log(answerC(" Q1 - Infinite , Q2 - 1934 , Q3 - krypton , Q4 - Damien "))
			console.log(answerC(" Q5 - Grayson , Q6 - 3 , Q7 - True , Q8 - Superman "))
			console.log(answerC(" Q9 - Flash , Q10 - Connor  "))
		}
	}

}

let mainQues  = readlineSync.question('What do you want to play DC quiz (type dc) or Marvel quiz (type marvel) ? ');
let score = 0;
console.log()

if(mainQues.toLowerCase() == "dc"){
	console.log(questionC("You will now face 10 Ques , best of luck"));
	console.log()
	askQues("dc");
}
		
		
else if(mainQues.toLowerCase() == "marvel"){
	console.log(questionC("You will now face 10 Ques , best of luck"));
	console.log()

	askQues("marvel");
}

else
	console.log(chalk.bold.red("Invalid response , please read the instructions again"))
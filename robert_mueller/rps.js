/*
scissors, paper, rock

scissors > paper ; paper < scissors
paper > rock; rock < paper ;
rock > scissors; scissors < rock ;


scissors: 0
paper: 1
rock: 2


*/


function name2num(name) {
    name=name.toLowerCase();
    switch (name)
    {
        case "scissors":
            return 0;
        case "paper":
            return 1;
        case "rock":
            return 2;
        default:
            return -1;
    }
}

function num2name(num) {
    switch (num)
    {
        case 0:
            return "Scissors";
        case 1:
            return "Paper";
        case 2:
            return "Rock";
        default:
            return undefined;
    }
}

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Please provide exactly one name');
  return;
}

const users_choice=name2num(args[0]);
if (users_choice<0) {
    console.error('Please provide exactly one of: rock, scissors, paper [not case sensitive]');
    return;
}

const computers_choice=Math.floor(Math.random() * 3);

let msg;

if (users_choice==computers_choice) {
    msg="No winner!";
} else
if (users_choice==0 && computers_choice==1 ||
    users_choice==1 && computers_choice==2 ||
    users_choice==2 && computers_choice==0) {
        msg="You win!"
} else {
    msg="Computer wins";
}

console.log(`You chose ${num2name(users_choice)}. Computer chose ${num2name(computers_choice)}. ${msg}`)

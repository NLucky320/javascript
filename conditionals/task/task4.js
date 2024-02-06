/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 90;
var myFriendScore = 83;
if (myScore > 80 && myFriendScore > 80) {
    console.log('go for a lunch')
}
else if (myScore > 80 && myFriendScore <= 80 && myFriendScore > 60) {
    console.log('good luck next time')
}
else if (myScore > 80 && myFriendScore <= 60 && myFriendScore > 40) {
    console.log('keep your friends message unseen')
}
else if (myScore > 80 && myFriendScore <= 40 ) {
    console.log('block your friend')
}
else if (myScore <= 80  ) {
    console.log(' go to home and sleep and act sad')
}
else {
    console.log('nothing to do-')
}


var scoreOfMine = 90;
var scoreOfMyFriend = 60;
if (scoreOfMine > 80) {
    if (scoreOfMyFriend > 80) {
        console.log('go for a lunch')
    } else if (scoreOfMyFriend <= 80 && scoreOfMyFriend > 60) {
        console.log('good luck next time')
    }
    else if (scoreOfMyFriend <= 60 && scoreOfMyFriend > 40) {
        console.log('keep your friends message unseen')
    }
    else if (scoreOfMyFriend <= 40) {
        console.log('block your friend')
    }
}
  else {
        console.log(' go to home and sleep and act sad')
    }
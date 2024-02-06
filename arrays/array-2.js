// looping technique
// 1.for loop
// 2.while loop
// 3.do while-----> Ignore
// 4.for of-----> array loop korar jonno
// 5.for in----->object loop korar jonno

const friends = ['elon', 'bill', 'mark', 'bezos'];
for (const friend of friends) {
    console.log(friend)
}


for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(friends[i]);
}


for (let i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}

const nums = [5, 15, 34, 23, 23, 57, 43, 23, 56, 77];
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}
for (let i = 0; i <= nums.length; i++){
    console.log(nums[i]);
}


let n = 0;
while (n < nums.length) {
    console.log(nums[n]);
    n++;
}

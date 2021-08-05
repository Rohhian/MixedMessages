// this is my first Portfolio Project called Mixed Messages
const nouns = ['car', 'plane', 'cat', 'dog', 'house', 'bike', 'road', 'man', 'woman', 'child', 'friend', 'enemy', 'student', 'teacher', 'politician', 'gangsta', 'doctor', 'chemist'];
const verbs = ['driving', 'talking to', 'singing to', 'running away from', 'loving', 'jumping on', 'avoiding', 'walking towards', 'screaming at', 'digging a hole to', 'apologizing to', ];
const adjectives = ['red', 'green', 'violet', 'blue', 'yellow', 'angry', 'friendly', 'heavy', 'lightweight', 'fat', 'skinny', 'shitty', 'amazing', 'sleepy', 'sexy', 'drunk', 'sad', 'happy', ];
const who = ['Your', 'His', 'Her', 'Their', 'Our'];

let n = Math.floor(Math.random() * nouns.length);
let v = Math.floor(Math.random() * verbs.length);
let a = Math.floor(Math.random() * adjectives.length);
let n1 = Math.floor(Math.random() * nouns.length);
while (n1 === n) {
    n1 = Math.floor(Math.random() * nouns.length);
};
let w = Math.floor(Math.random() * who.length);

// console.log(`Your ${adjectives[a]} ${nouns[n]} is ${verbs[v]} the ${nouns[n1]}`);

let messageBox = document.getElementById('message');
let message = `${who[w]} ${adjectives[a]} ${nouns[n]} is ${verbs[v]} the ${nouns[n1]}`;
messageBox.innerHTML = message;
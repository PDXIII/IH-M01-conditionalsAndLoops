const userName = 'tom';

if (userName === 'alice') {
  console.log('Hello, Alice!');
} else if (userName === 'bob') {
  console.log('Hello, Bob!');
} else {
  console.log('Hello, dear friend!');
}

switch (userName) {
  case 'alice':
    console.log('Hello, Alice. From the switch!');
    break;
  case 'bob':
    console.log('Hello, Bob. From the switch!');
    break;
  case 'charly':
    console.log('Hello, Cahrly, from the switch');
    break;
  default:
    console.log('Who are you, mate?');
}

for (const char of 'Hello World!') {
  console.log(char);
}

for (const element of [1, 2, 3, 4, 5]) {
  console.log(element);
}

let whileCounter = 0;

while (whileCounter <= 20) {
  console.log(whileCounter);
  whileCounter++;
}

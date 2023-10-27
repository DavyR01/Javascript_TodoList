
// **************** 98) Introduction à l'asynchrone et timers **************************

console.log('async');

const timeoutId = setTimeout(() => {
   console.log('timer done');
}, 3000);

console.log(timeoutId);
// timeoutId
clearTimeout(timeoutId)


let index = 0;

const intervalId = setInterval(() => {
   console.log('interval done');
   index++;
   // if (index === 5) {
   //    clearInterval(intervalId)
   //    console.log('finish');
   // }
}, 1000);

console.log(intervalId);

// clearInterval(intervalId)





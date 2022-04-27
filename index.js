// Code your solutions in this file


function writeCards(name,e){
  let message = [];
  for(let i = 0; i < name.length; i++){
    message.push (`Thank you, ${name[i]}, for the wonderful ${e} gift!`);
  }
  return message;
}

function countDown(i) {
  while (i >= 0) {
  console.log(i);
  i--;
}
return i;
}

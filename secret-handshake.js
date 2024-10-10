//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const actions = {
    1: "wink",
    2: "double blink",
    4: "close your eyes",
    8: "jump",
    16: "reverse the order of the operations in the secret handshake",
  };
  let result = [];
  let reverseOrNot = false

  if (num >= 16) {
    reverseOrNot = true
    num -= 16;
  }
  
  if (num >= 8) {
    result.push(actions[8])
    num -= 8;
  }
  
  if (num >= 4) {
    result.push(actions[4]);
    num -= 4;
  }
  
  if (num >= 2) {
    result.push(actions[2])
    num -= 2;
  }
  
  if(num >= 1) {
    result.push(actions[1])
    num -= 1;
  }

  if (reverseOrNot) {
    result.reverse()
  }

  return result;
};

console.log(commands(19));

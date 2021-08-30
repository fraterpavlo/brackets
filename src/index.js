module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let map = new Map(bracketsConfig);

    for (i=0; i<str.length; ++i) {
        let currentBracket = str[i]; 
        let lastBracketInStack = stack[stack.length - 1];
        let pairForLastOpenBracket = map.get(lastBracketInStack);
        if (map.has(currentBracket)) {
          if (currentBracket == pairForLastOpenBracket) {
            stack.pop();
          } else {
            stack.push(currentBracket);
          }
        } else {
          if (stack.length == 0) {
              return false;
          } else {
            if (currentBracket == pairForLastOpenBracket) {
              stack.pop();
            } else {
              return false;
            }
          }
      }
  }
  return stack.length === 0;
}


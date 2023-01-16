/*

Given an expression containing digits and operations (+, -, *), find all possible ways in which the expression can be evaluated by grouping the numbers and operators using parentheses.

Input: "1+2*3"
Output: 7, 9
Explanation: 1+(2*3) => 7 and (1+2)*3 => 9


Input: "2*3-4-5"
Output: 8, -12, 7, -7, -3 
Explanation: 2*(3-(4-5)) => 8, 2*(3-4-5) => -12, 2*3-(4-5) => 7, 2*(3-4)-5 => -7, (2*3)-4-5 => -3
*/

const operators = {
  "+": "+",
  "-": "-",
  "*": "*",
};

const evaluateExpress = (str = "") => {
  const f = (str = "", depth = 0) => {
    const localResults = [];

    if (str.length === 1) {
      return [Number(str)];
    }

    for (let i = 0; i < str.length; i++) {
      const currentElement = str[i];

      if (currentElement in operators) {
        const left = f(str.substring(0, i), depth + 1);
        const right = f(str.substring(i + 1), depth + 1);

        for (const i in left) {
          for (const j in right) {
            const aResult = calculate(left[i], right[j], currentElement);
            localResults.push(aResult);
          }
        }
      }
    }

    return localResults;
  };

  function calculate(left, right, currentElement) {
    if (left && right) {
      switch (currentElement) {
        case operators["+"]:
          return left + right;

        case operators["-"]:
          return left - right;

        case operators["*"]:
          return left * right;

        default:
          break;
      }
    }
  }

  return f(str, 0);
};

console.log(evaluateExpress("1+2*3"));
console.log(evaluateExpress("2*3-4-5"));

/*
Remember: There can be mutliple results from left and from right, thats why we need the nested loop

In this code if there's mutliple operators in a string the localResult will get overriden when for loop comes across next operator
say `1-3-4` localResult 1st will be 1-(3-4) but then it'll get reassigned to (1-3)-4
const f = (str = "", depth = 0) => {
    let localResult

    if (str.length === 1) {
      return Number(str)
    }

    for (let i = 0; i < str.length; i++) {
      const currentElement = str[i];

      if (currentElement in operators) {
        const left = f(str.substring(0, i), depth + 1);
        const right = f(str.substring(i + 1), depth + 1);

        localResult = calculate(left[i], right[j], currentElement);
        
      }
    }

    return localResult;
  };

*/

const mergeSortedArray = (A1, A2) => {
  if (A1.length === 0 || A2.length === 0) {
    return [];
  }

  const result = [];
  let cursorLeftArray = 0;
  let cursorRightArray = 0;

  while (cursorLeftArray < A1.length || cursorRightArray < A2.length) {
    if (A1[cursorLeftArray] == null) {
      result.push(...A2.slice(cursorRightArray));
      break;
    }
    if (A2[cursorRightArray] == null) {
      result.push(...A1.slice(cursorRightArray));
      break;
    }
    if (A1[cursorLeftArray] < A2[cursorRightArray]) {
      result.push(A1[cursorLeftArray]);
      cursorLeftArray++;
    } else if (A1[cursorLeftArray] > A2[cursorRightArray]) {
      result.push(A2[cursorRightArray]);
      cursorRightArray++;
    } else {
      result.push(A2[cursorRightArray]);
      result.push(A1[cursorLeftArray]);
      cursorLeftArray++;
      cursorRightArray++;
    }
  }

  return result;
};

mergeSortedArray([1, 5, 7], [2, 5, 8]);

/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return (nums[0] * product(nums.slice(1)));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }
  if (words[0].length > words[1].length) {
    words.splice(1,1);
  }
  else words.shift();
  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr='', idx=0) {
  if (newStr.length === Math.ceil(str.length/2)) {
    return newStr;
  }
  let char = str.slice(idx, idx + 1);
  newStr += char;
  idx += 2;
  return everyOther(str, newStr, idx)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx1, idx2, result) {
  if ((idx2 - idx1)  <= 1 || result === false) {
    return result
  }
  if (idx1 === undefined || idx2 === undefined) {
    idx1 = 0;
    idx2 = (str.length -1);
  }
  if (str[idx1] !== str[idx2]) {
    result = false;
    return result;
  }
  else if (str[idx1] === str[idx2]) {
    result = true;
    idx1 += 1;
    idx2 -= 1; 
    return isPalindrome(str, idx1, idx2, result) 
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0, item) {
  if (item === val) {
    return arr.indexOf(item);
  }
  if (idx === arr.length -1) {
    return -1;
  }
  item = arr[idx];
  idx += 1;
  return findIndex(arr, val, idx, item)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, last=str.length-1, newString='') {   
  if (last === -1) {
      return newString;
    }
  newString += str[last];
  last -= 1;
  return revString(str, last, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (let item in obj) {
    if (typeof(obj[item]) === 'object') {
      item = obj[item];
      gatherStrings(item, arr)
    }
    if (typeof(obj[item]) === 'string') {
      arr.push(obj[item])
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length-1, middleIdx) {
  if (leftIdx > rightIdx) {
    return -1;
  } 
  middleIdx = Math.floor((leftIdx + rightIdx)/2)
  if (arr[middleIdx] === val) {
    return middleIdx;
  }
  if (arr[middleIdx] > val ) {   
    return binarySearch(arr, val, leftIdx, rightIdx=middleIdx-1, middleIdx)
  }
  if (arr[middleIdx] < val ) {   
    return binarySearch(arr, val, leftIdx=middleIdx+1, rightIdx, middleIdx)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

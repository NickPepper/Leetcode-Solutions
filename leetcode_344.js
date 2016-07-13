// Difficulty: Easy

/*
344. Reverse String (https://leetcode.com/problems/reverse-string/)

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    // lets omit the null checking etc

/*
    // 1) Decrementing for-loop with concatenation
    var o = '';
	for (var i = s.length - 1; i >= 0; i--) {
    	o += s[i];
	}
  	return o;

  	// 2) Incrementing/decrementing for-loop with two arrays
  	var o = [];
  	for (var i = s.length - 1, j = 0; i >= 0; i--, j++) {
    	o[j] = s[i];
  	}
  	return o.join('');

  	// 3) Incrementing for-loop with array pushing and charAt
  	var o = [];
  	for (var i = 0, len = s.length; i <= len; i++) {
    	o.push(s.charAt(len - i));
  	}
  	return o.join('');

  	// 4) In-built functions
  	return s.split('').reverse().join('');

  	// 5) Decrementing while-loop with concatenation and substring
  	var i = s.length,
      	o = '';
  	while (i > 0) {
    	o += s.substring(i - 1, i);
    	i--;
  	}
  	return o;

  	// 6) Single for-loop declaration with concatenation
  	for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  	return o;

  	// 7) Recursion with substring and charAt
  	return (s === '') ? '' : reverseString(s.substr(1)) + s.charAt(0);

  	// 8) Internal function recursion
  	function rev(s, len, o) {
    	return (len === 0) ? o : rev(s, --len, (o += s[len]));
  	}
  	return rev(s, s.length, '');
*/
  	// 9) Half-index switch for-loop
  	s = s.split('');
  	var len = s.length,
      	halfIndex = +((len / 2) - 1),
      	tmp;
  	for (var i = 0; i <= halfIndex; i++) {
    	tmp = s[len - i - 1];
    	s[len - i - 1] = s[i];
    	s[i] = tmp;
  	}
  	return s.join('');
/*
  	// 10) Half-index recursion
  	if (s.length < 2) return s;
  	var halfIndex = Math.ceil(s.length / 2);
  	return reverseString(s.substr(halfIndex)) + reverseString(s.substr(0, halfIndex));
	
	// 11) Peppered switch
  	s = s.split('');
  	var i = 0,
      	j = s.length - 1,
      	tmp;
  	while (i < j) {
    	tmp = s[i];
      	s[i] = s[j];
      	s[j] = tmp;
    	i++;
      	j--;
  	}
  	return s.join('');
*/
};

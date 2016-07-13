// Difficulty: Easy

/*
344. Reverse String (https://leetcode.com/problems/reverse-string/)

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/


char* reverseString(char* s) {
    int len = 0;
	char *begin = s, *end;

   	while( *(s + len) != '\0' ) {
    	len++;
   	}

   	end = (s + len - 1);
 
   	for (int c = 0; c < len/2; c++) {        
      *begin    = *begin ^ *end;
      *end      = *begin ^ *end;
      *begin    = *begin ^ *end;
 
      begin++;
      end--;
   	}

	return s;
}

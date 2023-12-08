class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s.length() == 0) {
            return true;
        }
        if(s.length() > t.length()) {
            return false;
        }
        //set sPoint = 0
        int j = 0;
        int i = 0;
        //iterate over t and if a letter in t equals sPoint letter, then increment sPoint
        while (i < t.length()) {
          if( t.charAt(i) == s.charAt(j) ) {
            j++;
          }
          i++;

        if (j == s.length()) {
            return true;
        }
        }

        return false;

    }
}

// O: boolean represnting if s is subseq of t
// I: two strings, one possibly a substring of the other
// C: only lowercase english letters
// E: s length greater than t, both length 0

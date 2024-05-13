// Idea from chatGPT:( Code built by hand.

function longestPalindromicSubstring(str) {
  if (!str) return "Provide a valid string.";

  // Renew these two var every time we call the expandFromCenter function.
  let longest = "";

  function expandFromCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const current = str.substring(left, right + 1);
      if (current.length > longest.length) {
        longest = current;
      }
      left--;
      right++;
    }
  }

  // Find the "Center"
  for (let i = 0; i < str.length; i++) {
    // Check for odd-length palindromes
    expandFromCenter(i, i);
    // Check for even-length palindromes
    expandFromCenter(i, i + 1);
  }
  return longest;
}

// Example usage:
console.log(longestPalindromicSubstring("level")); // Output: "bab"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"

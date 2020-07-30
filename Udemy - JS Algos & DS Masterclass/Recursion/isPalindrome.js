// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(x) {
  if (x.length === 1) return true;
  if (x.length === 2) {
    if (x[0] === x[1]) return true;
  }
  if (x[0] === x.slice(-1)) {
    return isPalindrome(x.slice(1, x.length - 1));
  }
  return false;
}

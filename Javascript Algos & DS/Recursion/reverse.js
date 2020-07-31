function reverse(s) {
  if (!s.length) return s;

  return reverse(s.slice(1)) + s[0];
}

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

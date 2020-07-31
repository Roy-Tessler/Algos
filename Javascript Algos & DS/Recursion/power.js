function power(base, expo) {
  if (expo === 0) return 1;
  return base * power(base, expo - 1);
}

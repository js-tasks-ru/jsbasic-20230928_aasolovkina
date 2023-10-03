function factorial(n) {
  // ваш код...
  if (n <= 1) return 1;

  let r = n;
  do {
    r = r * (--n);
  } while (n > 1);

  return r;
}

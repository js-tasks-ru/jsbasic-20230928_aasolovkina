let calculator = {
  // ваш код
  a: 0,
  b: 0,
  read: function(a, b) {
    this.a = a || 0;
    this.b = b || 0;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

var K_classic = function () {
  this.x = 42;
};

var K_object_literal = function () {
  return {x: 42};
};

var K_number = function () {
  return 42;
};

var K_empty_array = function () {
  return [];
};

var K_string = function () {
  return 'wtf?';
};


var K_other_instance = function () {
  return new K_classic();
};

console.log(['new K_classic', new K_classic]);
console.log(['new K_object_literal', new K_object_literal]);
console.log(['new K_number', new K_number]);
console.log(['new K_empty_array', new K_empty_array]);
console.log(['new K_string', new K_string]);
console.log(['new K_other_instance', new K_other_instance]);


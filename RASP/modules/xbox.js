var xbox = require('xbox-controller-node');


xbox.on('a', function () {
  console.log('[A] button press');
});

xbox.on('x', function () {
  console.log('[X] button press');
});

xbox.on('b', function () {
  console.log('[B] button press');
});

xbox.on('y', function () {
  console.log('[Y] button press');
});

xbox.on('stick', function (data) {
  console.log(data);
});

console.log(xbox.eventNames())
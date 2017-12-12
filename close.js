const serialport = require('serialport');

const port = new serialport(process.argv[2], function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});


port.close(function(err) {
  if (err) {
    return console.log('Error on close: ', err.message);
  }
  console.log('port closed');
});

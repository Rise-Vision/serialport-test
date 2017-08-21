const serialport = require('serialport');

let dataToSend = [];

process.argv.forEach(function (val, index, array) {
  if(index > 2){
    dataToSend.push('0x'+val);
  }
});

const port = new serialport(process.argv[2], function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

port.on('readable', function () {
  process.stdout.write(port.read().toString('hex'));
})

port.write(dataToSend, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
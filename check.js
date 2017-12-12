// this checks with a separate open() call, and also calling close()

const serialport = require('serialport');

let dataToSend = [];

process.argv.forEach(function (val, index, array) {
  if(index > 2){
    dataToSend.push('0x'+val);
  }
});

const port = new serialport(process.argv[2], {}, false);

port.on('readable', function () {
  process.stdout.write(port.read().toString('hex'));
})

port.on('error', error => {
  console.error(error.message);
})

port.open();

port.write(dataToSend, function(err)
{

  if (err)
    console.log('Error on write: ', err.message);
  else
    console.log('message written');

  // not explicitly closing the port may result in problems
  setTimeout( () =>
    port.close(function(err)
    {
      if (err)
        return console.log('Error on close: ', err.message);

      console.log('port closed');
    }), 5000 )
});

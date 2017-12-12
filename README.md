# serialport-test

### Running

`node check.js /dev/ttyUSB0 01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 31 03 73 0d`

On windows use COMX instead of /dev/ttyXXX

Ensure no other process is using the port when sending commands. In Windows this
means programs like Serial Port Monitor have to be closed before sending
commands.

Current code uses 'serialport' communication defaults, which are 9600 baud rate,
8 data bits, 1 stop bits, no parity, no flow control. If other settings are
needed they should be edited during SerialPort object construction as
documented here:

https://www.npmjs.com/package/serialport#module_serialport--SerialPort..openOptions

### Debugging

`DEBUG=* node check.js /dev/ttyUSB0 01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 31 03 73 0d`

### Listing existing serial ports

`node list.js`

### Typical serial port commands

Turn on: 01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 31 03 73 0d
Turn off: 01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 34 03 76 0d

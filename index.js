'use strict';

const io = require('socket.io-client');
const socket = io.connect('https://deployment-prep-server-401d30.herokuapp.com/');

const UPPERCASE_EVENT = 'uppercase';
const WRITE_EVENT = 'write-event';

const handleUppercaseEvent =  (payload) => {
  console.log(payload);
    if (payload && payload.filePath && Buffer.isBuffer(payload.fileContents)) {
      const uppercaseContents = payload.fileContents.toString().toUpperCase();

      socket.emit(WRITE_EVENT ,{
        filePath: payload.filePath,
        uppercaseContents
      });
    }
  };

socket.on(UPPERCASE_EVENT, handleUppercaseEvent);

module.exports = handleUppercaseEvent;

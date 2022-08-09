let moment = require('moment');
moment.locale('uk');

console.log(moment().utcOffset(7).format('LLL'));

const bcoin = require('./bcoin/lib/bcoin.js');
const bip70 = bcoin.bip70;
const https = require('https');

const host = 'bitpay.com'
const path = '/i/3PLeT2aqrw79vhV1xVVVib';
const headers = {'Accept': 'application/bitcoin-paymentrequest'};

const options = {
  host: host,
  path: path,
  headers: headers
};

function dispDet(pr){
    p = bip70.PaymentRequest.fromRaw(pr);
    d = p.paymentDetails;

    console.log(d);

    var amt = d.outputs[0].value;
    var addr = d.outputs[0].address;

    J = d.outputs[0].toJSON()
    console.log(J.value/100000000, J.address);
}

const req = https.request(options, function(response) {
  response.setEncoding('binary');
  var data = [];
  response.on('data', function (chunk) {
    data.push( Buffer.from(chunk, 'binary'));
  });

  response.on('end', function () {
    var buffer = Buffer.concat(data);
    dispDet(buffer);
  });
});
req.end();
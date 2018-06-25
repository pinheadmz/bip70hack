
### This tool intentionally breaks secure protocols and could destory your bitcoins forever.

### Use at your own risk :-)

In-browser script fetches the payment request from the URL you enter, decodes it,
and displays a QR code for a "normal" Bitcoin invoice: just an amount and an address.
You can then send that amount of Bitcoin to that address from ANY wallet, without completing the BIP70 protocol.

[What is BIP70?](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki)

### Why is there a controversy?

[BitPay only uses BIP70 URIs](https://blog.bitpay.com/bitpay-and-payment-protocol/)

[This makes some wallets unusable with BitPay merchants](https://blog.samouraiwallet.com/post/169222582782/bitpay-qr-codes-are-no-longer-valid-important)

### How this app was made:

[BIP70 support was removed from bcoin on Oct 30, 2017](https://github.com/bcoin-org/bcoin/commit/658d3db9280885d6a4fea72013696cee4c9af2fa)

Using the source code from before that date, I rebased the BIP70 module on top of bcoin's current master. [You can see my hacked-together branch here.](https://github.com/pinheadmz/bcoin/tree/bip70hack)
[I had to the same sort of hack on the bcoin "bcrypto" module as well.](https://github.com/pinheadmz/bcrypto/tree/bip70hack)

Once I had BIP70 working again in Node.JS, I compiled the module for the browser with webpack:

`$ webpack-cli --entry ./lib/bip70/index.js --output ./lib/bip70/bip70webpack.js --output-library bip70`

To correctly use the BIP70 module in the browser I had to import support for "Buffer" data types normally found only in Node.JS:

[Browser buffer library](https://github.com/feross/buffer)

[Pre-compiled browser-buffer library for browser!](https://wzrd.in/standalone/buffer)

Then I added some UI elements:

[Bootstrap](https://getbootstrap.com/)

[QR code](https://davidshimjs.github.io/qrcodejs/)
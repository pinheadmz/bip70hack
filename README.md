


bip70 removal Oct 30, 2017:
https://github.com/bcoin-org/bcoin/commit/658d3db9280885d6a4fea72013696cee4c9af2fa

new repos:
https://github.com/pinheadmz/bcoin/tree/bip70hack
https://github.com/pinheadmz/bcrypto/tree/bip70hack

browserify:
browserify lib/bip70/index.js | uglifyjs -c > lib/bip70/bip70browser.js

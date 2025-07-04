// index.js
const Blockchain = require('./blockchain');
const Block = require('./block');

let myBlockchain = new Blockchain();

console.log("⛏️ Mining block 1...");
myBlockchain.addBlock(new Block(1, "2025-06-27", { amount: 4 }));

console.log("⛏️ Mining block 2...");
myBlockchain.addBlock(new Block(2, "2025-06-28", { amount: 10 }));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log("✅ Blockchain valid?", myBlockchain.isChainValid());

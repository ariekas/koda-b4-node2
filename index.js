const input = require('./lib/asynchronous/generateDate')
const inputManual = require('./lib/asynchronous/converdManual')

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


rl.question("Masukkan tanggal (format: DD-MM-YYYY): ", (inputDate) => {
  input.converdDate(inputDate)
  // inputManual.generateDateManual(inputDate)
  rl.close()
})
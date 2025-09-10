const moment = require("moment")

function converdDate(inputDate) {
    if (inputDate.length === 8 || inputDate.length === 10) {
      if (inputDate.includes("-")) {
        inputDate = moment(inputDate, "DD-MM-YYYY", true)
      } else {
        inputDate = moment(inputDate, "DDMMYYYY", true)
      }
  
      if (!inputDate.isValid()) {
        console.log(
          "Format tanggal tidak valid. Gunakan format DD-MM-YYYY (contoh: 24-01-2005)."
        )
      } else {
        const converd = inputDate.format("DD/MM/YYYY")
        console.log(`Tanggal setelah konversi: ${converd}`)
      }
    } else {
      console.log("Date melebihi batas karakter")
    }
}

module.exports = {
  converdDate,
}

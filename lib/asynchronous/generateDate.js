const moment = require("moment")
const {customError} = require('../error')

async function converdDate(inputDate) {
  try {
    const result = await new Promise((resolve, reject) => {
      if (inputDate.length === 8 || inputDate.length === 10) {
        let parsedDate
        if (inputDate.includes("-")) {
          parsedDate = moment(inputDate, "DD-MM-YYYY", true)
        } else {
          parsedDate = moment(inputDate, "DDMMYYYY", true)
        }

        if (!parsedDate.isValid()) {
          return reject(new customError("Format tanggal tidak valid. Gunakan format DD-MM-YYYY (contoh: 24-01-2005)."))
        } else {
          return resolve(parsedDate.format("DD/MM/YYYY"))
        }
      } else {
        return reject(new customError("Input melebihi karakter yang di perbolehkan"))
      }
    })

    console.log(`Tanggal setelah konversi: ${result}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  converdDate,
}

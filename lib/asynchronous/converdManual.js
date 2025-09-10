const {customError} = require('../error')

async function generateDateManual(inputDate) {
  try {
    const result = await new Promise((resolve, reject) => {
      try {
        if(!(inputDate.length === 8 || inputDate.length === 10)){
          const errorLeght = new customError("Panjang input melebihi batas")
          throw errorLeght
        }else{
          let dateArray = inputDate.split("-")
          let parsedDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)
  
          if (!isNaN(parsedDate)) {
            const newDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`
            return resolve(newDate)
          } else {
          const errorFormat = new customError("Format yang di masukan salah")
          return reject(errorFormat)
          }
        }
      } catch (errorLeght) {
       return reject(errorLeght)
      }
    })
    console.log(`Tanggal setelah di conversi ${result}`)
 

  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  generateDateManual,
}

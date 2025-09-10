async function generateDateManual(inputDate) {
  try {
    const result = await new Promise((resolve, reject) => {
      try {
        let dateArray = inputDate.split("-")
        let parsedDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)

        if (!isNaN(parsedDate)) {
          const newDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`
          resolve(newDate)
        } else {
          reject("Format yang dimasukan salah")
        }
      } catch (err) {
        reject(err)
      }
    })
    console.log(`Tanggal setelah di conversi ${result}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  generateDateManual,
}

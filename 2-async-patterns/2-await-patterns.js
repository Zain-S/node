const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilepromise = util.promisify(readFile)
const writeFilepromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilepromise('./content/first.txt')
        const second = await readFilepromise('./content/second.txt')
        await writeFilepromise('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,)
        const result = await readFilepromise('./content/result-sync.txt')
        console.log(`Result: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

start()
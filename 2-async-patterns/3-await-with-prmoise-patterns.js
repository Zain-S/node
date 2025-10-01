const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt')
        const second = await readFile('./content/second.txt')
        await writeFile('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,)
        const result = await readFile('./content/result-sync.txt')
        console.log(`Result: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

start()
/// callback hell

// const { readFile, writeFile } = require('fs');

// console
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile(
//             './content/result-sync.txt',
//             `Here is the result: ${first}, ${second}`,
//             (err, result) => {
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 console.log('done with this task');
//             }
//         )
//     })
// })
// console.log('starting the next one');

const { readFile, writeFile } = require('fs')
const util = require('util')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const writeText = (path, text) => {
    return new Promise((resolve, reject) => writeFile(
        path,
        text,
        (err, result) => {
            if (err) {
                reject(err)
            }
            else
                resolve(result)
        }
    ))
}

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

const start = async () => {
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        await writeText('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,)
        const result = await getText('./content/result-sync.txt')
        console.log(`Result: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

start()
const data = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
let dataFilter = []

const checkWordFind = (wordParam, wordFind) => {
    const accommodatePush = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        for (let index = 0; index < element.length; index++) {
            const word = element[index];
            if (wordParam === word && element.length === wordFind.length) {
                accommodatePush.push(element)
            }
        }
    }

    if (accommodatePush.length) {
        dataFilter.push(accommodatePush)
    }
}


for (let index = 0; index < data.length; index++) {
    const element = data[index];

    for (let index = 0; index < element.length; index++) {
        const word = element[index];
        checkWordFind(word, element)
    }
}

for (let i = 0; i < dataFilter.length; i++) {
    const element = dataFilter[i];

    for (let index = 0; index < dataFilter.length; index++) {
        const elementSame = dataFilter[index];

        if (element.toString() !== elementSame.toString())
            dataFilter.splice(i + 1, 1)

    }
}

// const dataFinal = []
// for (let i = 0; i < dataFilter.length; i++) {
//     const element = dataFilter[i];
//     const dataPush = []

//     for (let index = 0; index < dataFilter.length; index++) {
//         const elementSame = dataFilter[index];

//         if (element.toString() !== elementSame.toString())
//             dataFilter.splice(i + 1, 1)

//         // if (element.toString() === elementSame.toString())
//         //     dataFilter.splice(i + 1, 1)

//     }

//     dataFinal.push(dataPush)
// }
// console.log(dataFilter[2].slice(1, 2))

console.log(dataFilter)

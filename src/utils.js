import fs from 'fs';
import chalk from 'chalk';
import stringSimilarity from 'string-similarity';

const commaSeparatedList = (value) => {
    console.log(value)
    return value.split(',');
}

const readFiles = (firstFilePath, secondFilePath) => {
    
    const firstFile = fs.readFileSync(firstFilePath, 'utf-8');
    const secondFile = fs.readFileSync(secondFilePath, 'utf-8');

    if (!firstFile || !secondFile) {
        console.log("error reading file!")
        process.exit(1)
    }

    return { firstFile, secondFile }
}

const JSONtoObj = (jsonFile) => {
    return JSON.stringify(JSON.parse(jsonFile))
}


const compareJSON = (firstFilePath, secondFilePath) => {

    const { firstFile, secondFile } = readFiles(firstFilePath, secondFilePath);
    const firstJSON = JSONtoObj(firstFile)
    const secondJSON = JSONtoObj(secondFile)

    const coef = stringSimilarity.compareTwoStrings(firstJSON, secondJSON)
    printResult(coef)
    process.exit(0)
}

const printResult = (result) => {
    const percentage = (result * 100).toFixed(1)
    console.log(chalk.blue(`JSON objects are ${chalk.green(percentage)}% similar, or ${chalk.green(result.toFixed(1))}`))
}

export {
    commaSeparatedList,
    readFiles,
    compareJSON
}
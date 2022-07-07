// Dependencies
const convert  = require('html2plaintext')

// function to strip HTML tags from strings
export const ConvertHtmlToString = (htmlString) => {
    return convert(htmlString)
}
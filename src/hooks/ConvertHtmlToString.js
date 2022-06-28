const convert  = require('html2plaintext')

export const ConvertHtmlToString = (htmlString) => {
    return convert(htmlString)
}
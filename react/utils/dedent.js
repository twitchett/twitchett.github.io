/*
* Utility function to remove whitespace in multline
* interpolated strings.
*
* Usage:
*   let myString = dedent`multi
*       line
*       string`
*/
function dedent(template, ...values) {
    // build the string from the interpolated values
    let output = template.reduce((acc, part, i) => {
        return acc + values[i - 1] + part
    })

    // split on new lines
    let lines = output.split(/(?:\r\n|\n|\r)/)

    // remove leading whitespace.
    return lines
        .map(line => line.replace(/^\s+/gm, ''))
        .join('')
        .trim()
}

export default dedent

var setZeroes = function(matrix) {
    // 使用第一行和第一列来标记其他行/列是否有0
    // 并且要再弄两个变量存储第一行第一列是否有0
    let firstRowHasZero = firstColHasZero = false
    for (let i=0; i<matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true
        }
    }
    for (let j=0; j<matrix.length; j++) {
        if (matrix[j][0] === 0) {
            firstColHasZero = true
        }
    }    for (let j=0; j<matrix.length; j++) {
        if (matrix[j][0] === 0) {
            firstColHasZero = true
        }
    }
    for (let j=1; j<matrix.length; j++) {
        for (let i=1; i<matrix[0].length; i++) {
            if (matrix[j][i] === 0) {
                matrix[j][0] = 0
                matrix[0][i] = 0
            }
        }
    }
    for (let j=1; j<matrix.length; j++) {
        for (let i=1; i<matrix[0].length; i++) {
            if (matrix[j][0] === 0 || matrix[0][i] === 0) {
                matrix[j][i] = 0
            }
        }
    }
    if (firstRowHasZero) {
        for (let i=0; i<matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }
    if (firstColHasZero) {
        for (let j=0; j<matrix.length; j++) {
            matrix[j][0] = 0
        }
    }
    return matrix
};
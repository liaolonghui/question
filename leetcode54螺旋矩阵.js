var spiralOrder = function(matrix) {

    if (matrix.length === 0) {
        return matrix
    }

    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    let direction = 'right'
    let result = []

    while (left <= right && top <= bottom) {
        if (direction === 'right') { // right
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i])
            }
            top++
            direction = 'bottom'
        } else if (direction === 'bottom') { // bottom
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        } else if (direction === 'left') { // left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'top'
        } else if (direction === 'top') { // top
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
            direction = 'right'
        }
    }

    return result
};
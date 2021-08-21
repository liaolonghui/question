var getLeastNumbers = function(arr, k) {
    arr.sort((a,b) => a-b)
    let result = []
    for (let i=0; i<k; i++) {
        result.push(arr[i])
    }
    return result
};
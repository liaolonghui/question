var compareVersion = function(version1, version2) {
    const versionArr1 = version1.split('.')
    const versionArr2 = version2.split('.')
    const max = Math.max(versionArr1.length, versionArr2.length)

    for (let i=0; i<max; i++) {
        if (Number(versionArr1[i] || 0) > Number(versionArr2[i] || 0)) {
            return 1
        } else if (Number(versionArr1[i] || 0) < Number(versionArr2[i] || 0)) {
            return -1
        }
    }

    return 0
}
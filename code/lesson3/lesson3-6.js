//种花问题
//[1,0,0,0,1,0,0,0,0,1] n=3
export default (arr, n) => {
    let tempArr = arr.join("").split("1"),
        tempCount = 0;

    tempArr.forEach((str, index) => {
        if(index === 0 || index === tempArr.length-1) {
            //第一位和最后一位满足0的个数是2的整数倍就可以了
            tempCount += Math.floor(str.length / 2);
        } else {
            //中间位数只能是2n+1
            tempCount += Math.floor((str.length - 1) / 2);
        }
        // console.log("str: ", str, " index: ", index, " tempCount: ", tempCount);
    });

    // console.log(tempCount);

    return n <= tempCount;
}
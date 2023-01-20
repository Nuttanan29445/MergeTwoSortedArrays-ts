export const merge = (col1: number[], col2: number[]) => {
    const arr = [...col1,...col2] //merge 2 arrays
  
    // sorted array
    // I used bubble sort algorithm
    let chck = false;
    while (!chck) {
      chck = true;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] > arr[i]) {
          let tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
          chck = false;
        }
      }
    }
    return arr
  }
console.log(merge([1,4,7],[2,3]))
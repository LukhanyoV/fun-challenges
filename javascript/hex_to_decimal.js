// using map would be faster
const hex2dec = val => {
    const hex = {}
    const hexsys = "0123456789ABDEF"

    for(let i in hexsys){
      hex[hexsys[i]] = i
    }
    
    const array = val.toUpperCase().split("")
    const dec_arr = [...array];
    
    for(let i in dec_arr){
      dec_arr[i] = hex[array[i]];
    }
    
    let sum = 0;
    dec_arr.reverse()
    
    for(let i in dec_arr){
      sum += dec_arr[i]*Math.pow(16, i)
    }
    
    return sum;
  }
  
  console.log(hex2dec("AB")) // 171
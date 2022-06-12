// solve for x
// given: 2x-4=0

const solve_x = eq => {
    const sides = eq.split("=")

    const regex_int = /(\+|\-)?\d+(?![a-z])/g
    
    const regex_strn = /(\+|\-)?\d+(?=[a-z])/g

    const ints = sides.map(side => side.match(regex_int)).filter(s=>s).map(x => {
      return x.map(Number).reduce((s,v)=>s+v,0)
    }).map((v,i) => i === 0 ? -v : v).reduce((s,v)=>s+v)
                                                                           
    const strn = sides.map(side => side.match(regex_strn)).filter(s=>s).map(x => {
      return x.map(Number).reduce((s,v)=>s+v,0)
    }).map((v,i) => i !== 0 ? -v : v).reduce((s,v)=>s+v)
    
    return ints/strn
}

// test the solution
console.log(solve_x("2x-4=0"))

// more examples
console.log(solve_x("3x-4+5=2x-5"))
console.log(solve_x("-4x-4+5=2x"))
console.log(solve_x("-1x-5=2x"))

// future self
// make this work
// => x-2=0
// currently needs to be like this to work
// => 1x-2=0
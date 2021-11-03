function lonelyinteger(a) {
const count = {}
const result = []

a.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let prop in count){
    if (count[prop] == 1){
        result.push(prop)
    }
}

  console.log(count)
  console.log(result)
return result;

}

lonelyinteger([1,2,3,4,3,2,1])
let calculations = [] 

const add = (a=0,b=0) => Number(a)+Number(b)

const sub = (a,b) => a-b

const mul = (a,b) => a*b

const div = (a,b)=>{
    if(b == 0) {
      alert("cannot divide by 0")
      return
    }
    return a/b
}

const square = (a) => a*a 

const squareRoot = (a) => Math.sqrt(a)

const storeLocalStorage = (a,r) => {
    calculations = getAllTransactions()
    if(calculations == null){
        calculations = []
    }
    else if(calculations.length == 10)    console.log("popped : "+calculations.pop())

    calculations.unshift({Transaction : a, result: r})
    commit()
}

const commit = () => localStorage.setItem("calc", JSON.stringify(calculations))



const getAllTransactions = () => JSON.parse(localStorage.getItem("calc"))

// storeLocalStorage("a+b=5")

// for(const a of (getAllTransactions()))
//       console.log(a);
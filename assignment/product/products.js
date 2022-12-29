// const arr = [{name:"hemanth"},{name:"veda"}]

// /* const arr = [10,20] */

// localStorage.setItem("obj", JSON.stringify(arr) /* arr */)
// const result = JSON.parse(localStorage.getItem("obj"))

// for (const key of result) {
//     console.log(key.name)
// }


// to store product objects
let productList = []

class product{
    constructor(id, name, image, price, description){
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }
}

class productMethods{

    postProduct = (product) => {

        const temp  = this.getAllProducts()
        productList = (temp == null) ? [] : temp
       
        productList.push(product) 
        this.commitChanges()  
    }

    commitChanges = () => localStorage.setItem("ProductList", JSON.stringify(productList))

    getAllProducts = () => JSON.parse(localStorage.getItem("ProductList"))

    putProduct = (product) => {

        const tempProducts = this.getAllProducts() 

        for (const replace in tempProducts) {

            if(tempProducts[replace].id == product.id){

                tempProducts.splice(replace,1,product)
                productList = tempProducts
                this.commitChanges()
                return
            }
        }

    }

    getProductById = (id) => {

        const tempProducts = this.getAllProducts() 

        return tempProducts.find((e) => e.id == id)

        

        /* for(const search of tempProducts){
            if(search.id == id){
                return search
            }
        } */
    }

}

const prod =  new productMethods()

// prod.postProduct(new product(1,"Purse","asdajs",1234,"nice"))
// prod.postProduct(new product(2,"banana","asadadsajs",5464," very nice"))

console.log(prod.getAllProducts())
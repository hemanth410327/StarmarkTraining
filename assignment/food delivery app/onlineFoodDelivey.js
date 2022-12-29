class OnlineFoodDeliveryApp{
    static foodId = 0
    constructor(foodName, foodImg, foodPrice, quantity){
        this.foodId = ++OnlineFoodDeliveryApp.foodId
        this.foodName = foodName
        this.foodImg = foodImg
        this.foodPrice = foodPrice
        this.quantity = quantity
    }
}

class OnlineFoodDeliveryAppRepo{

    FoodDetails = []

    cart = new Map()

    postFoodDetails = (foodDetails) => this.FoodDetails.push(foodDetails)

    getAllFoodDetails = () => this.FoodDetails

    addToCart = (foodDetails) => this.cart.set(foodDetails.foodName, foodDetails)

    getCartDetails =() => this.cart

    getFoodDetailsById =(id) => this.FoodDetails.find((e) => e.foodId == id)

    deleteFromCart = (key) => this.cart.delete(key)

    clearCart = () => this.cart.clear()

}

const foodDetailsRepo = new OnlineFoodDeliveryAppRepo()

foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Dosa","./image/dosa.jfif",50,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Idli","./image/idli.jfif",60,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Pulav","./image/pulav.jfif",50,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Biryani","./image/biryani.jfif",150,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("kabab","./image/kabab.jfif",80,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Veg Fried Rice","./image/vegFriedRice.jfif",60,1))
foodDetailsRepo.postFoodDetails(new OnlineFoodDeliveryApp("Egg Rice","./image/eggRice.jfif",40,1))

console.log(foodDetailsRepo.getAllFoodDetails())
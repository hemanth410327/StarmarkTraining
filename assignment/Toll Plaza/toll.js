class TollPlasa{
    static id = 0
    constructor(vehicalNumber,vehicalType, fee,date){
        this.id = ++TollPlasa.id
        this.vehicalNumber = vehicalNumber
        this.vehicalType = vehicalType
        this.fee = fee
        this.date = date
    }
}

class RepositoryTollPlasa{
    vehicalAmount = {"Car" : 40, "Bike":20, "Bus":60, "Truck":100}

    TollPlasaDetails = []

    postTollPlasaDetails = (tollplasa) => this.TollPlasaDetails.push(tollplasa)

    getAllDetails = () => this.TollPlasaDetails

    formateDate = (date) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

}

const tollplasa = new RepositoryTollPlasa()

tollplasa.postTollPlasaDetails(new TollPlasa("KA02MF1234","Car",40,new Date(2022,12,12)))
tollplasa.postTollPlasaDetails(new TollPlasa("KA02CF1834","Bike",20,new Date(2022,12,12)))
tollplasa.postTollPlasaDetails(new TollPlasa("KA02KF1284","Bus",60,new Date(2022,12,12)))

console.log(tollplasa.getAllDetails())

// console.log(tollplasa.vehicalAmount["Car"])
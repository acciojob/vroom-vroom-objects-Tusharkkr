class car{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    getMakeModel(){
        return `${this.make} ${this.model}`
    }

}

class SportsCar extends car{
    constructor(make,model,topSpeed){
        super()
        this.make=make
        this.model=model
        this.topSpeed=topSpeed
    }
    getTopSpeed(){
        super.getMakeModel()
        return this.topSpeed
    }
}



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

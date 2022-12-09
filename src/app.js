class Car{
    constructor(marca, ligado, price){
        this.marca = marca;
        this.ligado = ligado;
        this.price = price;
    }
    getMarca(){
        return this.marca;
    }
    getCarStatus(){
        return this.ligado;
    }
    setStatus(status){
       this.ligado = status;
    }
    getPrice(){
        return this.price;
    }
}

module.exports = {
    Car:Car
    }
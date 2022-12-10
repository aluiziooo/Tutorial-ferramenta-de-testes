const Car = require('../src/app').Car;
const expect = require('chai').expect;
const assert = require('chai').assert

describe('Testando as funções de Carros', function() {
it('1. Verificar se o carro está ligado ou não', function(done) {
let c1 = new Car("Toyota",false,40000);
expect(c1.getCarStatus()).to.equal(false);
done();
});

it('2. Verificar preço do carro', function(done) {
let c2 = new Car("Toyota",false,40000);
expect(c2.getPrice()).to.equal(40000);
done();
});

it('3. Verificar duas vezes status do carro', function(done) {
let c3 = new Car("Toyota",false,40000);
expect(c3.getCarStatus()).to.equal(false);
c3.setStatus(true);
expect(c3.getCarStatus()).to.equal(true);
done();
});
it('4. Verificando o tipo de retorno do status do carro', function(done){
    let c4 = new Car("Chevrolet",false,40000);
    assert.typeOf(c4.getCarStatus(), 'Boolean', 'Status é boleano');
    done();
});
it('5. Verificando o tamannho do nome da marca do carro', function(done){
    let c4 = new Car("Chevrolet",false,40000);
    assert.lengthOf(c4.getMarca(), 9, 'A nome da marca do carro tem 9 caracteres');
    done();
});
});
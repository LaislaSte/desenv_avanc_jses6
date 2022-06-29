//mocha -> executa seus testes, usa no node e browser

const { equal } = require('assert');
const assert = require('assert');
const { expect } = require('chai');
const sinon = require('sinon');
const Math = require('../Math.js');

let value = 0;

describe('Math class', function(){
    //hooks -> executar codigos e evitar repetição; existe o before, after
    //antes de cada it faça esse escopo de codigo
    beforeEach(function(){
        value = 0
    })

    //dercrever comportamento esperado:
    it('Sum two numbers', function(done){
        const math = new Math();
        
        assert.equal( math.sum(5 ,5) , 10 )//equal do assert serve pra validar de numeros passados sao iguais, assim nao jogamos um erro manualmente 
    })

    //existe os teste pendente, que ainda nao foi criado seu metodo; 
    //com o only pode executar apenas 1 unico teste com o mocha
    it.only('multiply two numbers', function(){
        const math = new Math();
        assert.equal(math.multiply(5,5), 25)
    })
    //ou pular um teste
    it.skip('multiply two numbers', function(){
        const math = new Math();
        assert.equal(math.multiply(5,5), 24) //me retorna um erro pq nao é 24 e sim 25
    })

})

//para fazer validação assincrona
/*
it('Sum two numbers', function(done){
    const math = new Math();
    math.sum(5, 5, value => {
        assert.equal(value, 14)
        done();
    }) //retorna o erro, diferentemente se nao tivesse o done
})
*/

//mocha nao sao tao legiveis, pra isso usamos uma lib chai, que faz com que os testes seja mais descritivos. Como ficaria nossos it:

describe('Math class teste 2', function(){
    beforeEach(function(){
        value = 0
    })

    it('sum two numbers assinc method', function(done){
        const math = new Math();
        this.timeout(2200);

        value = 5 //o value só muda se modificalo no escopo em questao

        math.sumA( value, 5, value =>{
            //sintaxe mais legivel
            expect(value).to.equal(10)
            done()
        } )
    })

    it('multiply two numbers', function () {
        const math = new Math()
        expect(math.multiply(value, 5)).to.equal(0)
    })

    //posso validar objts
    it('object validation', function () {
        const obj = {
            name: 'celio'
        }
        const obj2 = {
            name: 'celio'
        }
        expect(obj)
        .to.have.property('name').equal('celio') //propriedade esperada com valor esperado
        //posso fazer comparações
        expect(obj2).to.deep.equal(obj);
    })

    //usando sinon -> serve para mochar metodos e apis, criar testes a partir dos metodos
    it('call req with sum and index value', function() {
        const req = {}
        const res = {
            //load: sinon.spy()
            //fazendo como fun
            load: function load() {
                console.log('called')
            }
        }
        sinon.spy(res, 'load')
        //sinon.stub(res, 'load').returns('xpto') //posso substitui ele por outro return

        const math = new Math()
        
        math.printSum(req, res, 5, 5)
        expect(res.load.calledOnce).to.be.true
        expect(res.load.args[0]).to.equal('index')
        expect(res.load.args[0][1]).to.equal(10)
    })
})


//verifique a documentação do chai

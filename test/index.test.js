log = console.log;
expect = require('chai').expect;
should = require('chai').should();

be = require('chai').be;
const chai = require("chai"); 
const sinon = require("sinon");
//const appController = require("../src/controllers/app.controller");

const {alwaysTrue, legitString} = require ('../src/index')

describe("#alwaysTrue ", ()=>{
    it("it should always return true",()=>{
        alwaysTrue().should.be.true;
    });
    it("expect always return true",()=>{
        expect(alwaysTrue()).to.be.true
    });
    it("should not return false",()=>{
         alwaysTrue().should.not.be.false
    });

})
describe("#mocha test", function()  {

    it('true should be true', ()=> {       
        true.should.be.true;
    });

    it('false should not be true', ()=> {       
        false.should.not.be.true;
    });
    
    
    it('undefined should not be true', ()=> {       
    expect(undefined).to.be.undefined;
    
    });
    it('another test...', ()=> {
        expect(2).to.equal(2);
        expect(2).to.be.ok;
    });
    
    it('say Hi keshav', ()=> {
        
        expect(2).to.equal(2);
        expect(2).to.be.ok;
    });


});
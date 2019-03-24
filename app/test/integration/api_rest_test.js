const chai          = require("chai");
const assert        = chai.assert;
const request       = require("supertest")("http://localhost:3000");

describe("Pruebas sobre get", function(){
    it("prueba de estado", function(){
        request.get("/").expect(200);
    });
    it("prueba de puerto", function(){
        assert.equal(request.get("port").app,"http://localhost:3000");
    });
    it("prueba de permiso de escritura", function(){
        assert.equal(request.get("port").writable,true);
    });
    it("prueba de tipo", function(){
        assert.typeOf(request.get("port"),"Object");
    });
});
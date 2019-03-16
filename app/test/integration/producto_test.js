const chai          = require("chai");
const assert        = chai.assert;
const request       = require("supertest")("../../src/routes/Producto");
const producto_js   = require("../../src/routes/Producto");
const productos_js  = require("../../src/models/Productos.js");

describe("Pruebas sobre un Producto de la página web", function(){
    describe("Prueba de creación de un producto", function(){
        it("comprobando que se crea correctamente", function(){
            let producto_test = {
                id: 34567,
                anunciante: "nombre",
                fecha: "06/03/2019",
                titulo: "test_name",
                foto: "test_foto",
                descripcion: "test_descripcion",
                tipo: "test_tipo",
                nivel: "Todos",
                provincia: "Tenerife" ,
                localidad: "Candelaria",
                precio: 40,
            }
            request.post("/").send(producto_test).expect("Producto guardado");
        });
    });
    describe("Prueba de modificación de un producto", function(){
        it("comprobando que se modifica correctamente", function(){
            let producto_test = {
              id: 34567,
              anunciante: "nombre",
              fecha: "06/03/2019",
              titulo: "test_name",
              foto: "test_foto",
              descripcion: "test_descripcion",
              tipo: "test_tipo",
              nivel: "Todos",
              provincia: "Tenerife" ,
              localidad: "Candelaria",
              precio: 40,
            }
            request.post("/").send(producto_test).expect("Producto guardado");
            request.put("/:id").send(producto_test).expect("Producto actualizada");
        });
    });
    describe("Prueba de borrado de un producto", function(){
        it("comprobando que se borra correctamente", function(){
            let producto_test = {
              id: 34567,
              anunciante: "nombre",
              fecha: "06/03/2019",
              titulo: "test_name",
              foto: "test_foto",
              descripcion: "test_descripcion",
              tipo: "test_tipo",
              nivel: "Todos",
              provincia: "Tenerife" ,
              localidad: "Candelaria",
              precio: 40,
            }
            request.post("/").send(producto_test).expect("Producto guardado");
            request.delete("/:id").send(producto_test).expect("Producto eliminado ");
        });
    });
    describe("Prueba de obtención de un producto", function(){
        it("comprobando que se obtiene correctamente", function(){
            let producto_test = {
              id: 34567,
              anunciante: "nombre",
              fecha: "06/03/2019",
              titulo: "test_name",
              foto: "test_foto",
              descripcion: "test_descripcion",
              tipo: "test_tipo",
              nivel: "Todos",
              provincia: "Tenerife" ,
              localidad: "Candelaria",
              precio: 40,
            }
            request.post("/").send(producto_test).expect("Producto guardado");
            request.get("/:id").send(producto_test).expect('Content-Type', /json/);
        });
    });
    describe("Prueba de obtención de productos", function(){
        it("comprobando que se obtienen correctamente", function(){
            let producto_test = {
              id: 34567,
              anunciante: "nombre",
              fecha: "06/03/2019",
              titulo: "test_name",
              foto: "test_foto",
              descripcion: "test_descripcion",
              tipo: "test_tipo",
              nivel: "Todos",
              provincia: "Tenerife" ,
              localidad: "Candelaria",
              precio: 40,
            }
            request.get("/").expect('Content-Type', /json/);
        });
    });
    describe("Pruebas sobre Productos.js", function(){
        it("comprobando existe objeto Productos", function(){
            assert.typeOf(productos_js.schema.obj, "object");
        });
        it("comprobando que campo id es de tipo Number", function(){
            assert.equal(productos_js.schema.paths.id.instance, "Number");
        });
        it("comprobando que campo anunciante es de tipo String", function(){
            assert.equal(productos_js.schema.paths.anunciante.instance, "String");
        });
        it("comprobando que campo fecha es de tipo Number", function(){
            assert.equal(productos_js.schema.paths.fecha.instance, "String");
        });
        it("comprobando que campo titulo es de tipo String", function(){
            assert.equal(productos_js.schema.paths.titulo.instance, "String");
        });
        it("comprobando que campo foto es de tipo String", function(){
            assert.equal(productos_js.schema.paths.foto.instance, "String");
        });
        it("comprobando que campo descripcion es de tipo String", function(){
            assert.equal(productos_js.schema.paths.descripcion.instance, "String");
        });
        it("comprobando que campo tipo es de tipo String", function(){
            assert.equal(productos_js.schema.paths.tipo.instance, "String");
        });
        it("comprobando que campo nivel es de tipo String", function(){
            assert.equal(productos_js.schema.paths.nivel.instance, "String");
        });
        it("comprobando que campo provincia es de tipo String", function(){
            assert.equal(productos_js.schema.paths.provincia.instance, "String");
        });
        it("comprobando que campo localidad es de tipo Number", function(){
            assert.equal(productos_js.schema.paths.localidad.instance, "String");
        });
        it("comprobando que campo precio es de tipo Number", function(){
            assert.equal(productos_js.schema.paths.precio.instance, "Number");
        });
    });

    it("comprobando que existe método get sobre /", function(){
        assert.equal(producto_js.stack[0].route.path, "/");
        assert.equal(producto_js.stack[0].route.methods.get, true);
    });
    it("comprobando que existe método post sobre /", function(){
        assert.equal(producto_js.stack[2].route.path, "/");
        assert.equal(producto_js.stack[2].route.methods.post, true);
    });
    it("comprobando que existe método get sobre /:id", function(){
        assert.equal(producto_js.stack[1].route.path, "/:id");
        assert.equal(producto_js.stack[1].route.methods.get, true);
    });
    it("comprobando que existe método put sobre /:id", function(){
        assert.equal(producto_js.stack[3].route.path, "/:id");
        assert.equal(producto_js.stack[3].route.methods.put, true);
    });
    it("comprobando que existe método delete sobre /:id", function(){
        assert.equal(producto_js.stack[4].route.path, "/:id");
        assert.equal(producto_js.stack[4].route.methods.delete, true);
    });
});

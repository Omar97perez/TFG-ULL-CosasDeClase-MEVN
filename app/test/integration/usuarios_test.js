const chai          = require("chai");
const assert        = chai.assert;
const request       = require("supertest")("../../src/authentication/backend/users/users-controller");
const user_model    = require("../../src/authentication/backend/users/user-model");

describe("Pruebas sobre Usuarios", function(){
    describe("Prueba de registro de un usuario", function(){
        it("comprobando que se registra correctamente", function(){
            let user_test = {
                password: "pass_test",
                name: "test_name",
                surname: "test_surname",
                email: "test_email",
                paragraph: "test_parrafo",
                image: "image",
                telephone: "test_telefono",
                birthdate: "9/10/1995",
                genre: "test_genre",
            }
            request.post("/register").send(user_test).expect(201);
        });
    });
    describe("Prueba de autentificación", function(){
        it("comprobando que se autentifica correctamente", function(){
            let user_test = {
              password: "pass_test",
              name: "test_name",
              surname: "test_surname",
              email: "test_email",
              paragraph: "test_parrafo",
              image: "image",
              telephone: "test_telefono",
              birthdate: "9/10/1995",
              genre: "test_genre",
            }
            request.post("/register").send(user_test).expect(201);
            request.post("/authenticate").send(user_test.email, user_test.password).expect(201);
        });
    });
    describe("Prueba de usuario actual", function(){
        it("comprobando que se retorna correctamente el usuario actual", function(){
            let user_test = {
              password: "pass_test",
              name: "test_name",
              surname: "test_surname",
              email: "test_email",
              paragraph: "test_parrafo",
              image: "image",
              telephone: "test_telefono",
              birthdate: "9/10/1995",
              genre: "test_genre",
            }
            request.post("/register").send(user_test).expect(201);
            request.post("/authenticate").send(user_test.email, user_test.password).expect(201);
            request.get("/current").expect('Content-type', /object/);
        });
    });
    describe("Pruebas sobre tipo de contenido", function(){
        it("comprobando que es JSON", function(){
            request.get("/").expect('Content-Type', /json/);
        });
    });
    describe("Pruebas sobre get", function(){
        it("comprobando correcto funcionamiento de /", function(){
            request.get("/").expect(200);
        });
        it("comprobando correcto funcionamiento de /:id", function(){
            request.get("/:id").expect(200);
        });
        it("comprobando correcto funcionamiento de /current", function(){
            request.get("/current").expect(200);
        });
    });
    describe("Pruebas sobre post", function(){
        it("comprobando correcto funcionamiento de /authenticate", function(){
            request.post("/authenticate").expect(200);
        });
        it("comprobando correcto funcionamiento de /register", function(){
            request.get("/register").expect(200);
        });
    });
    describe("Prueba sobre put", function(){
        it("comprobando correcto funcionamiento de /:id", function(){
            request.put("/:id").expect(200);
        });
    });
    describe("Prueba sobre delete", function(){
        it("comprobando correcto funcionamiento de /:id", function(){
            request.delete("/:id").expect(200);
        });
    });
    describe("Prueba sobre data_user", function(){
        it("comprobando que testea correctamente la autorización del usuario", function(){
            let user_test = {
              password: "pass_test",
              name: "test_name",
              surname: "test_surname",
              email: "test_email",
              paragraph: "test_parrafo",
              image: "image",
              telephone: "test_telefono",
              birthdate: "9/10/1995",
              genre: "test_genre",
            }
            request.post("/register").send(user_test).expect(201);
            request.post("/authenticate").send(user_test.email, user_test.password).expect(201);
            request.post("/user_data").expect(403, 'No tienes autorización')
        });
    });
});

describe("Pruebas sobre user-model.js", function(){
    it("comprobando existe objeto userSchema", function(){
        assert.typeOf(user_model.schema.obj, "object");
    });
    it("comprobando que campo password es de tipo String", function(){
        assert.equal(user_model.schema.paths.password.instance, "String");
    });
    it("comprobando que campo name es de tipo String", function(){
        assert.equal(user_model.schema.paths.name.instance, "String");
    });
    it("comprobando que campo surname es de tipo String", function(){
        assert.equal(user_model.schema.paths.surname.instance, "String");
    });
    it("comprobando que campo email es de tipo String", function(){
        assert.equal(user_model.schema.paths.email.instance, "String");
    });
    it("comprobando que campo birthdate es de tipo Date", function(){
        assert.equal(user_model.schema.paths.birthdate.instance, "String");
    });
    it("comprobando que campo genre es de tipo String", function(){
        assert.equal(user_model.schema.paths.genre.instance, "String");
    });
    it("comprobando que campo createdDate es de tipo Date", function(){
        assert.equal(user_model.schema.paths.createdDate.instance, "Date");
    });
});

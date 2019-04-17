import { mount } from 'vue-test-utils'
import Login from "../../../src/app/components/usuario/Login.vue";

describe("Login.vue", () => {

  const wrapper = mount(Login);

  it("Comprobando que se encuentra campo email de formulario", () => {
    expect(wrapper.html()).toContain('<input type="email"')
  });

  it("Comprobando que se encuentra campo password de formulario", () => {
    expect(wrapper.html()).toContain('<input type="password"')
  });

  it("Comprobando que se encuentra opción de registro", () => {
    expect(wrapper.html()).toContain('<p>Si no tienes cuenta aún, puedes')
  });

  it("Comprobando que se encuentra botón de enviar", () => {
    expect(wrapper.contains('button')).toBe(true)
  });

  it("Comprobando que hay etiqueta de formulario", () => {
    expect(wrapper.contains('form')).toBe(true)
  });

  it("Comprobando la introducción de email y que no tenga errores", () => {
    wrapper.setData({ email: 'test@test.com' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de contraseña y que no tenga errores", () => {
    wrapper.setData({ password: '1234567' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando que al loguearse no existan errores", () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

});

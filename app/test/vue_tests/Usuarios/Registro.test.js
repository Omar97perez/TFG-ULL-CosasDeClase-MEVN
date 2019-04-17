import { mount } from 'vue-test-utils'
import Registro from "../../../src/app/components/usuario/Registro.vue";

describe("Registro.vue", () => {

  const wrapper = mount(Registro);

  it("Comprobando que se encuentra campo nombre de formulario", () => {
    expect(wrapper.html()).toContain('id="name"')
  });

  it("Comprobando que se encuentra campo apellidos de formulario", () => {
    expect(wrapper.html()).toContain('id="surname"')
  });

  it("Comprobando que se encuentra campo fecha de nacimiento de formulario", () => {
    expect(wrapper.html()).toContain('id="birthdate"')
  });

  it("Comprobando que se encuentra campo email de formulario", () => {
    expect(wrapper.html()).toContain('id="email"')
  });

  it("Comprobando que se encuentra campo contraseña de formulario", () => {
    expect(wrapper.html()).toContain('id="password"')
  });

  it("Comprobando que se encuentra botón de registrarse", () => {
    expect(wrapper.contains('button')).toBe(true)
  });

  it("Comprobando que hay etiqueta de formulario", () => {
    expect(wrapper.contains('form')).toBe(true)
  });

  it("Comprobando introduccion de nombre y que no tenga errores", () => {
    wrapper.setProps({ name: 'test' })
    expect(wrapper.vm.name).toBe('test')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de apellidos y que no tenga errores", () => {
    wrapper.setProps({ surname: 'test_1 test_2' })
    expect(wrapper.vm.surname).toBe('test_1 test_2')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de email y que no tenga errores", () => {
    wrapper.setProps({ email: 'test@test.com' })
    expect(wrapper.vm.email).toBe('test@test.com')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de contraseña y que no tenga errores", () => {
    wrapper.setProps({ telephone: '6546546544' })
    expect(wrapper.vm.telephone).toBe('6546546544')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de contraseña y que no tenga errores", () => {
    wrapper.setProps({ password: '1234567' })
    expect(wrapper.vm.password).toBe('1234567')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción del párrafo y que no tenga errores", () => {
    wrapper.setProps({ paragraph: 'Descripción test' })
    expect(wrapper.vm.paragraph).toBe('Descripción test')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de la imágen y que no tenga errores", () => {
    wrapper.setProps({ image: 'Descripcióntest' })
    expect(wrapper.vm.image).toBe('Descripcióntest')
    expect(wrapper.find('.error').exists()).toBe(false)
  });


  it("Comprobando la introducción de fecha de nacimiento y que no tenga errores", () => {
    wrapper.setProps({ birthdate: new Date("1997-03-25") })
    expect(wrapper.vm.birthdate).toEqual(new Date("1997-03-25"))
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de genero de nacimiento y que no tenga errores", () => {
    new Date
    wrapper.setProps({ genre: 'otro' })
    expect(wrapper.vm.genre).toBe('otro')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando que al registrarse no existan errores", () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de genero de nacimiento y que no tenga errores", () => {
    expect(wrapper.vm.genre).toBe('otro')
  });
});

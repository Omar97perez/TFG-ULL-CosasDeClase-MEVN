import { mount } from 'vue-test-utils'
import Apuntes from "../../../src/app/components/productos/apuntes.vue";

describe("/apuntes.vue", () => {

  const wrapper = mount(Apuntes);

  it("Comprobando la introducción de ciudad y que no tenga errores", () => {
    wrapper.setData({ ciudad: 'Tenerife' })
    expect(wrapper.vm.ciudad).toBe('Tenerife')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de numero de página y que no tenga errores", () => {
    wrapper.setData({ numero: 0 })
    expect(wrapper.vm.numero).toBe(0)
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando el contenido del numeropagina sea 1", () => {
    expect(wrapper.vm.numeropagina).toBe(1)
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando el contenido de tampagina sea 6", () => {
    expect(wrapper.vm.tampagina).toBe("6")
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando que el tipo de anuncio que se muestra see de apuntes", () => {
    expect(wrapper.vm.tipo).toBe("apuntes")
    expect(wrapper.find('.error').exists()).toBe(false)
  });
  
});

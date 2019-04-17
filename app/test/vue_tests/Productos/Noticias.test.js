import { mount } from 'vue-test-utils'
import Noticias from "../../../src/app/components/productos/noticias.vue";

describe("/noticias.vue", () => {

  const wrapper = mount(Noticias);

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

  it("Comprobando que el tipo de anuncio que se muestra es de noticias", () => {
    expect(wrapper.vm.tipo).toBe("noticias")
    expect(wrapper.find('.error').exists()).toBe(false)
  });

});

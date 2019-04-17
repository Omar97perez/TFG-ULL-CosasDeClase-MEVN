import { mount } from 'vue-test-utils'
import Buscador from "../../../src/app/components/productos/buscador_productos.vue";

describe("buscador_productos.vue", () => {

    const wrapper = mount(Buscador);
    
    it("Comprobando que hay etiqueta de formulario", () => {
      expect(wrapper.contains('form')).toBe(true)
    });

    it("Comprobando que hay etiqueta select de formulario", () => {
      expect(wrapper.contains('select')).toBe(true)
    });

    it("Comprobando que hay etiqueta option  de formulario", () => {
      expect(wrapper.contains('option')).toBe(true)
  });

    it("Comprobando introduccion de busqueda y que no tenga errores", () => {
      wrapper.setProps({ busqueda: 'Test' })
      expect(wrapper.vm.busqueda).toBe('Test')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de tipo y que no tenga errores", () => {
      wrapper.setProps({ tipo: 'Foto' })
      expect(wrapper.vm.tipo).toBe('Foto')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de descripcion y que no tenga errores", () => {
      wrapper.setProps({ ciudad: 'descripcion' })
      expect(wrapper.vm.ciudad).toBe('descripcion')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

});

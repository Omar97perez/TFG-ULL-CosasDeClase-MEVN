import { mount } from 'vue-test-utils'
import Administrador from "../../../src/app/components/productos/Administrador.vue";

describe("Administrador.vue", () => {

    const wrapper = mount(Administrador);

    it("Comprobando que se encuentra botón de registrarse", () => {
      expect(wrapper.contains('button')).toBe(true)
    });

    it("Comprobando que hay etiqueta de formulario", () => {
      expect(wrapper.contains('form')).toBe(true)
    });

    it("Comprobando que hay etiqueta select de formulario", () => {
      expect(wrapper.contains('select')).toBe(true)
    });

    it("Comprobando que hay etiqueta option  de formulario", () => {
      expect(wrapper.contains('option')).toBe(true)
  });

    it("Comprobando introduccion de título y que no tenga errores", () => {
      wrapper.setProps({ titulo: 'Test' })
      expect(wrapper.vm.titulo).toBe('Test')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de foto y que no tenga errores", () => {
      wrapper.setProps({ foto: 'Foto' })
      expect(wrapper.vm.foto).toBe('Foto')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de descripcion y que no tenga errores", () => {
      wrapper.setProps({ descripcion: 'descripcion' })
      expect(wrapper.vm.descripcion).toBe('descripcion')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de tipo y que no tenga errores", () => {
      wrapper.setProps({ tipo: 'tipo' })
      expect(wrapper.vm.tipo).toBe('tipo')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de nivel y que no tenga errores", () => {
      wrapper.setProps({ nivel: 'nivel' })
      expect(wrapper.vm.nivel).toBe('nivel')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción del provincia y que no tenga errores", () => {
      wrapper.setProps({ provincia: 'provincia' })
      expect(wrapper.vm.provincia).toBe('provincia')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de la localidad y que no tenga errores", () => {
      wrapper.setProps({ localidad: 'localidad' })
      expect(wrapper.vm.localidad).toBe('localidad')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de fecha de precio y que no tenga errores", () => {
      wrapper.setProps({ precio: "precio" })
      expect(wrapper.vm.precio).toBe("precio")
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando que al introducir no existan errores", () => {
      const button = wrapper.find('button')
      button.trigger('click')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de ciudad y que no tenga errores", () => {
      wrapper.setData({ ciudad: 'Tenerife' })
      expect(wrapper.vm.ciudad).toBe('Tenerife')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de tipo y que no tenga errores", () => {
      wrapper.setData({ tipo: 'clases' })
      expect(wrapper.vm.tipo).toBe('clases')
      expect(wrapper.find('.error').exists()).toBe(false)
    });

    it("Comprobando la introducción de busqueda y que no tenga errores", () => {
      wrapper.setData({ busqueda: 'Matemáticas' })
      expect(wrapper.vm.busqueda).toBe('Matemáticas')
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
      expect(wrapper.vm.tampagina).toBe("10")
      expect(wrapper.find('.error').exists()).toBe(false)
    });
});

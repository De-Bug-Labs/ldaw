import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import GaapInfo from "@/components/GaapInfo.vue";
import ModalHelp from "@/components/ModalHelp.vue";
import HelpForm from "@/components/HelpForm.vue";
import About from "@/views/About.vue";

describe("HelloWorld.vue", () => {
  it("muestra propiedad de mensaje correcta", () => {
    const msg = "Header Text";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HelloWorld.vue", () => {
  it("muestra propiedad de contenido correcta", () => {
    const cont = "Body Content";
    const wrapper = shallowMount(HelloWorld, {
      props: { cont },
    });
    expect(wrapper.text()).toMatch(cont);
  });
});

describe("About.vue", () => {
  it("muestra query correcto", () => {
    const wrapper = shallowMount(About);
    wrapper.vm.getInfo();
    expect(wrapper.vm.completed).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("modal despliega valor de seccion correcto", () => {
    const seccion = "Text content";
    const wrapper = shallowMount(ModalHelp, {
      props: { seccion },
    });
    expect(wrapper.text()).toMatch(seccion);
  });
});

describe("ModalHelp.vue", () => {
  it("modal despliega valor de nombre correcto", () => {
    const nombre = "Text content";
    const wrapper = shallowMount(ModalHelp, {
      props: { nombre },
    });
    expect(wrapper.text()).toMatch(nombre);
  });
});

describe("ModalHelp.vue", () => {
  it("modal despliega valor de correo correcto", () => {
    const correo = "Text content";
    const wrapper = shallowMount(ModalHelp, {
      props: { correo },
    });
    expect(wrapper.text()).toMatch(correo);
  });
});

describe("ModalHelp.vue", () => {
  it("modal despliega telefono correcto", () => {
    const telefono = "Text content";
    const wrapper = shallowMount(ModalHelp, {
      props: { telefono },
    });
    expect(wrapper.text()).toMatch(telefono);
  });
});

describe("ModalHelp.vue", () => {
  it("validaciones se realizan correctamente", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({
      seccion: 2,
      nombre: "Bananas",
      correo: "test@test.com",
      telefono: "4422046497",
      mensaje: "Test Mensaje",
    });
    wrapper.vm.validateForm();
    expect(wrapper.vm.confirmed).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("se valida que no se realice validacion con valores incorrectos", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({
      seccion: 0,
      nombre: "Bananas",
      correo: "test@test.com",
      telefono: "4422046497",
      mensaje: "Test Mensaje",
    });
    wrapper.vm.validateForm();
    expect(wrapper.vm.confirmed).toBe(false);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de seccion -error valor no seleccionado", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ seccion: 0 });
    wrapper.vm.checkSeccion();
    expect(wrapper.vm.secInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de seccion -correcto", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ seccion: 3 });
    wrapper.vm.checkSeccion();
    expect(wrapper.vm.secInv).toBe(false);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de nombre -error valor vacio", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ nombre: "" });
    wrapper.vm.checkNombre();
    expect(wrapper.vm.nomInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de nombre -error longitud incorrecta", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ nombre: "a" });
    wrapper.vm.checkNombre();
    expect(wrapper.vm.nomInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de nombre -error caracteres invalidos", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ nombre: "emilio2" });
    wrapper.vm.checkNombre();
    expect(wrapper.vm.nomInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de nombre -correcto", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ nombre: "Emilio Rivas" });
    wrapper.vm.checkNombre();
    expect(wrapper.vm.nomInv).toBe(false);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de correo -error vacio", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ correo: "" });
    wrapper.vm.checkCorreo();
    expect(wrapper.vm.corInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de correo -error correo invalido", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ correo: "testtestcom" });
    wrapper.vm.checkCorreo();
    expect(wrapper.vm.corInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de correo -correcto", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ correo: "test@test.com" });
    wrapper.vm.checkCorreo();
    expect(wrapper.vm.corInv).toBe(false);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de telefono -error vacio", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ telefono: "" });
    wrapper.vm.checkTelefono();
    expect(wrapper.vm.telInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de telefono -error longitud invalida", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ telefono: "3323" });
    wrapper.vm.checkTelefono();
    expect(wrapper.vm.telInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de telefono -correcto", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ telefono: "4422046497" });
    wrapper.vm.checkTelefono();
    expect(wrapper.vm.telInv).toBe(false);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de mensaje -error vacio", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ mensaje: "" });
    wrapper.vm.checkMensaje();
    expect(wrapper.vm.menInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de mensaje -error longitud invalida", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ mensaje: "a" });
    wrapper.vm.checkMensaje();
    expect(wrapper.vm.menInv).toBe(true);
  });
});

describe("ModalHelp.vue", () => {
  it("validacion de mensaje -correcto", () => {
    const wrapper = shallowMount(HelpForm);
    wrapper.setData({ mensaje: "mensaje generico aceptable" });
    wrapper.vm.checkMensaje();
    expect(wrapper.vm.menInv).toBe(false);
  });
});

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import ModalHelp from "@/components/ModalHelp.vue";
import HelpForm from "@/components/HelpForm.vue";
import TitleCard from "@/components/TitleCard.vue";
import About from "@/views/About.vue";
import Salon from "@/views/Salon.vue";
import Material from "@/views/Material.vue";

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

describe("Salon.vue", () => {
  it("Salon de la fama es cargado", () => {
    const wrapper = shallowMount(Salon);
    expect(wrapper.vm.mounted).toBe(true);
  });
});

describe("Salon.vue", () => {
  it("Tarjeta de salon de la fama cargada correctamente", () => {
    const titulo = "Header Text";
    const wrapper = shallowMount(TitleCard, {
      props: { titulo },
    });
    expect(wrapper.text()).toMatch(titulo);
  });
});

describe("Salon.vue", () => {
  it("Tarjeta de salon de la fama cargada correctamente", () => {
    const mensaje = "Body text";
    const wrapper = shallowMount(TitleCard, {
      props: { mensaje },
    });
    expect(wrapper.text()).toMatch(mensaje);
  });
});

describe("Material", () => {
  it("muestra query correcto en busqueda de material", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ page: 1 });
    wrapper.setData({ completeQuery: false });
    wrapper.vm.getInfo();
    expect(wrapper.vm.completeQuery).toBe(true);
  });
});

describe("Material", () => {
  it("muestra query correcto en paginacion", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ completeQuery: false });
    wrapper.vm.getPages();
    expect(wrapper.vm.completeQuery).toBe(true);
  });
});

describe("Material", () => {
  it("cambio de pagina valido +", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ page: 1, totalPages: 2 });
    wrapper.vm.nextPage();
    expect(wrapper.vm.page).toBe(2);
  });
});

describe("Material", () => {
  it("cambio de pagina invalido +", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ page: 2, totalPages: 2 });
    wrapper.vm.nextPage();
    expect(wrapper.vm.page).toBe(2);
  });
});

describe("Material", () => {
  it("cambio de pagina valido -", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ page: 2, totalPages: 2 });
    wrapper.vm.lastPage();
    expect(wrapper.vm.page).toBe(1);
  });
});

describe("Material", () => {
  it("cambio de pagina valido -", () => {
    const wrapper = shallowMount(Material);
    wrapper.setData({ page: 1, totalPages: 2 });
    wrapper.vm.lastPage();
    expect(wrapper.vm.page).toBe(1);
  });
});

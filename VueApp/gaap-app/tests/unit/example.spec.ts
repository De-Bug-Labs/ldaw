import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import GaapInfo from "@/components/GaapInfo.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Header Text";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg},
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const cont = "Body Content";
    const wrapper = shallowMount(HelloWorld, {
      props: { cont },
    });
    expect(wrapper.text()).toMatch(cont);
  });
});

describe("GaapInfo.vue", () => {
  it("renders props.msg when passed", () => {
    const mision = "Text content";
    const wrapper = shallowMount(GaapInfo, {
      props: { mision },
    });
    expect(wrapper.text()).toMatch(mision);
  });
});

describe("GaapInfo.vue", () => {
  it("renders props.msg when passed", () => {
    const instalaciones = "Text content";
    const wrapper = shallowMount(GaapInfo, {
      props: { instalaciones },
    });
    expect(wrapper.text()).toMatch(instalaciones);
  });
});

describe("GaapInfo.vue", () => {
  it("renders props.msg when passed", () => {
    const equipo = "Text content";
    const wrapper = shallowMount(GaapInfo, {
      props: { equipo },
    });
    expect(wrapper.text()).toMatch(equipo);
  });
});

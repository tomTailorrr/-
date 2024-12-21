import { S as Sidebar } from "./Sidebar-Bop-tjAD.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-BXxPlIRz.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "element-plus";
const _sfc_main = {
  components: {
    Sidebar
  },
  data() {
    return {
      olympiads: [
        {
          id: 1,
          title: "Олимпиада по анатомии",
          description: "Проверьте свои знания о строении человеческого тела!",
          difficulty: "Средний",
          date: "20 декабря 2024"
        },
        {
          id: 2,
          title: "Олимпиада по физиологии",
          description: "Изучите физиологические процессы организма и их особенности.",
          difficulty: "Высокий",
          date: "15 января 2025"
        },
        {
          id: 3,
          title: "Олимпиада по фармакологии",
          description: "Разберитесь в действии лекарственных средств и их применении.",
          difficulty: "Низкий",
          date: "5 февраля 2025"
        }
      ]
    };
  },
  methods: {
    register(id) {
      alert(`Вы зарегистрированы на олимпиаду ID: ${id}!`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "olympiads-page" }, _attrs))} data-v-865cb2c4>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-865cb2c4><h1 data-v-865cb2c4>Олимпиады</h1><p class="description" data-v-865cb2c4> Участвуйте в олимпиадах по медицинской тематике, проверяйте свои знания и получайте новые навыки! </p><!--[-->`);
  ssrRenderList($data.olympiads, (olympiad) => {
    _push(`<div class="olympiad-card" data-v-865cb2c4><h2 data-v-865cb2c4>${ssrInterpolate(olympiad.title)}</h2><p data-v-865cb2c4>${ssrInterpolate(olympiad.description)}</p><div class="details" data-v-865cb2c4><span data-v-865cb2c4>Сложность: ${ssrInterpolate(olympiad.difficulty)}</span><span data-v-865cb2c4>Дата: ${ssrInterpolate(olympiad.date)}</span></div><button data-v-865cb2c4>Участвовать</button></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/olympiads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const olympiads = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-865cb2c4"]]);
export {
  olympiads as default
};
//# sourceMappingURL=olympiads-DhrDUzxO.js.map

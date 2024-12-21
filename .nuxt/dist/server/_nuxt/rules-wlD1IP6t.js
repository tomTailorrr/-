import { S as Sidebar } from "./Sidebar-Bop-tjAD.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rules-page" }, _attrs))} data-v-136887d0>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-136887d0><h1 data-v-136887d0>Правила</h1><p data-v-136887d0>Добро пожаловать на страницу с правилами! Ознакомьтесь с основными правилами использования нашей системы:</p><ul data-v-136887d0><li data-v-136887d0>1. Соблюдайте уважение к другим пользователям.</li><li data-v-136887d0>2. Запрещено размещать спам или вредоносные материалы.</li><li data-v-136887d0>3. Соблюдайте авторские права при публикации контента.</li><li data-v-136887d0>4. Используйте систему исключительно по назначению.</li><li data-v-136887d0>5. Нарушение правил может привести к ограничению доступа к системе.</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rules.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-136887d0"]]);
export {
  rules as default
};
//# sourceMappingURL=rules-wlD1IP6t.js.map

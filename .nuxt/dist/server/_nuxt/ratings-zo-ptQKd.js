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
      users: [
        { name: "Иван Иванов", rating: 950, updatedAt: "20 декабря 2024" },
        { name: "Мария Петрова", rating: 890, updatedAt: "19 декабря 2024" },
        { name: "Алексей Смирнов", rating: 920, updatedAt: "18 декабря 2024" },
        { name: "Екатерина Сидорова", rating: 980, updatedAt: "17 декабря 2024" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ratings-page" }, _attrs))} data-v-cc5dc82c>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-cc5dc82c><h2 data-v-cc5dc82c>Рейтинг</h2><p data-v-cc5dc82c> Здесь представлен список пользователей с их текущими рейтингами. Рейтинг отображает уровень знаний и активности пользователя в системе. </p><table data-v-cc5dc82c><thead data-v-cc5dc82c><tr data-v-cc5dc82c><th data-v-cc5dc82c>№</th><th data-v-cc5dc82c>Пользователь</th><th data-v-cc5dc82c>Рейтинг</th><th data-v-cc5dc82c>Дата обновления</th></tr></thead><tbody data-v-cc5dc82c><!--[-->`);
  ssrRenderList($data.users, (user, index) => {
    _push(`<tr data-v-cc5dc82c><td data-v-cc5dc82c>${ssrInterpolate(index + 1)}</td><td data-v-cc5dc82c>${ssrInterpolate(user.name)}</td><td data-v-cc5dc82c>${ssrInterpolate(user.rating)}</td><td data-v-cc5dc82c>${ssrInterpolate(user.updatedAt)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ratings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ratings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc5dc82c"]]);
export {
  ratings as default
};
//# sourceMappingURL=ratings-zo-ptQKd.js.map

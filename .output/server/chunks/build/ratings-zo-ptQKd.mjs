import { S as Sidebar } from './Sidebar-Bop-tjAD.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-BXxPlIRz.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'element-plus';

const _sfc_main = {
  components: {
    Sidebar
  },
  data() {
    return {
      users: [
        { name: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432", rating: 950, updatedAt: "20 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024" },
        { name: "\u041C\u0430\u0440\u0438\u044F \u041F\u0435\u0442\u0440\u043E\u0432\u0430", rating: 890, updatedAt: "19 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024" },
        { name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u043C\u0438\u0440\u043D\u043E\u0432", rating: 920, updatedAt: "18 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024" },
        { name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0430", rating: 980, updatedAt: "17 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ratings-page" }, _attrs))} data-v-cc5dc82c>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-cc5dc82c><h2 data-v-cc5dc82c>\u0420\u0435\u0439\u0442\u0438\u043D\u0433</h2><p data-v-cc5dc82c> \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0441 \u0438\u0445 \u0442\u0435\u043A\u0443\u0449\u0438\u043C\u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430\u043C\u0438. \u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. </p><table data-v-cc5dc82c><thead data-v-cc5dc82c><tr data-v-cc5dc82c><th data-v-cc5dc82c>\u2116</th><th data-v-cc5dc82c>\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C</th><th data-v-cc5dc82c>\u0420\u0435\u0439\u0442\u0438\u043D\u0433</th><th data-v-cc5dc82c>\u0414\u0430\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F</th></tr></thead><tbody data-v-cc5dc82c><!--[-->`);
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

export { ratings as default };
//# sourceMappingURL=ratings-zo-ptQKd.mjs.map

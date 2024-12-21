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
      olympiads: [
        {
          id: 1,
          title: "\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u043F\u043E \u0430\u043D\u0430\u0442\u043E\u043C\u0438\u0438",
          description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u043E \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0442\u0435\u043B\u0430!",
          difficulty: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
          date: "20 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024"
        },
        {
          id: 2,
          title: "\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u043F\u043E \u0444\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0438",
          description: "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u0444\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0430 \u0438 \u0438\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438.",
          difficulty: "\u0412\u044B\u0441\u043E\u043A\u0438\u0439",
          date: "15 \u044F\u043D\u0432\u0430\u0440\u044F 2025"
        },
        {
          id: 3,
          title: "\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u043F\u043E \u0444\u0430\u0440\u043C\u0430\u043A\u043E\u043B\u043E\u0433\u0438\u0438",
          description: "\u0420\u0430\u0437\u0431\u0435\u0440\u0438\u0442\u0435\u0441\u044C \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u0438\u0445 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0438.",
          difficulty: "\u041D\u0438\u0437\u043A\u0438\u0439",
          date: "5 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2025"
        }
      ]
    };
  },
  methods: {
    register(id) {
      alert(`\u0412\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0443 ID: ${id}!`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "olympiads-page" }, _attrs))} data-v-865cb2c4>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-865cb2c4><h1 data-v-865cb2c4>\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u044B</h1><p class="description" data-v-865cb2c4> \u0423\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430\u0445 \u043F\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438! </p><!--[-->`);
  ssrRenderList($data.olympiads, (olympiad) => {
    _push(`<div class="olympiad-card" data-v-865cb2c4><h2 data-v-865cb2c4>${ssrInterpolate(olympiad.title)}</h2><p data-v-865cb2c4>${ssrInterpolate(olympiad.description)}</p><div class="details" data-v-865cb2c4><span data-v-865cb2c4>\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(olympiad.difficulty)}</span><span data-v-865cb2c4>\u0414\u0430\u0442\u0430: ${ssrInterpolate(olympiad.date)}</span></div><button data-v-865cb2c4>\u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C</button></div>`);
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

export { olympiads as default };
//# sourceMappingURL=olympiads-DhrDUzxO.mjs.map

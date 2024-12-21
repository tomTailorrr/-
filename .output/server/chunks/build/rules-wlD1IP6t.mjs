import { S as Sidebar } from './Sidebar-Bop-tjAD.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rules-page" }, _attrs))} data-v-136887d0>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-136887d0><h1 data-v-136887d0>\u041F\u0440\u0430\u0432\u0438\u043B\u0430</h1><p data-v-136887d0>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438! \u041E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B:</p><ul data-v-136887d0><li data-v-136887d0>1. \u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435 \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C.</li><li data-v-136887d0>2. \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u0442\u044C \u0441\u043F\u0430\u043C \u0438\u043B\u0438 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.</li><li data-v-136887d0>3. \u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430 \u043F\u0440\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430.</li><li data-v-136887d0>4. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E.</li><li data-v-136887d0>5. \u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0435.</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rules.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-136887d0"]]);

export { rules as default };
//# sourceMappingURL=rules-wlD1IP6t.mjs.map

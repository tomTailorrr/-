import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { S as Sidebar } from './Sidebar-Bop-tjAD.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-BXxPlIRz.mjs';
import 'vue-router';
import 'element-plus';

const _imports_0 = "" + buildAssetsURL("medical-image.tcMSoM-A.svg");
const _sfc_main = {
  components: { Sidebar }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-page" }, _attrs))} data-v-42e588c2>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-42e588c2><h1 data-v-42e588c2>\u041E \u0441\u0430\u0439\u0442\u0435 Medical School</h1><p data-v-42e588c2> \u0421\u0430\u0439\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u043B\u044F \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0430\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B. </p><img${ssrRenderAttr("src", _imports_0)} alt="Medical illustration" data-v-42e588c2></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-42e588c2"]]);

export { index as default };
//# sourceMappingURL=index-d3-8Hr90.mjs.map

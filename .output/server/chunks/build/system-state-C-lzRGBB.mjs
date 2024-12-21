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
      data: [
        { id: "\u0414\u0430", date: "18.01.2024 13:15", taskNumber: "1213", author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", status: "\u041F\u0440\u0438\u043D\u044F\u0442\u043E" },
        { id: "\u0414\u0430", date: "18.01.2024 13:15", taskNumber: "12", author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", status: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442" },
        { id: "\u0414\u0430", date: "18.01.2024 13:15", taskNumber: "1213", author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", status: "\u041F\u0440\u0438\u043D\u044F\u0442\u043E" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "system-state-page" }, _attrs))} data-v-ecd87fab>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-ecd87fab><h2 data-v-ecd87fab>\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B</h2><p data-v-ecd87fab> \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0430 \u0442\u0435\u043A\u0441\u0442. </p><table data-v-ecd87fab><thead data-v-ecd87fab><tr data-v-ecd87fab><th data-v-ecd87fab>ID</th><th data-v-ecd87fab>\u0414\u0430\u0442\u0430</th><th data-v-ecd87fab>\u2116 \u0417\u0430\u0434\u0430\u0447\u0438</th><th data-v-ecd87fab>\u0410\u0432\u0442\u043E\u0440 \u0440\u0435\u0448\u0435\u043D\u0438\u044F</th><th data-v-ecd87fab>\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u0442\u0432\u0435\u0442\u0430</th></tr></thead><tbody data-v-ecd87fab><!--[-->`);
  ssrRenderList($data.data, (item, index) => {
    _push(`<tr data-v-ecd87fab><td data-v-ecd87fab>${ssrInterpolate(item.id)}</td><td data-v-ecd87fab>${ssrInterpolate(item.date)}</td><td data-v-ecd87fab>${ssrInterpolate(item.taskNumber)}</td><td data-v-ecd87fab>${ssrInterpolate(item.author)}</td><td data-v-ecd87fab>${ssrInterpolate(item.status)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/system-state.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const systemState = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ecd87fab"]]);

export { systemState as default };
//# sourceMappingURL=system-state-C-lzRGBB.mjs.map

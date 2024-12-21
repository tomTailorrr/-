import { S as Sidebar } from './Sidebar-Bop-tjAD.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
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
      options: ["\u0412\u0430\u0440\u0438\u0430\u043D\u0442 1", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 2", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 3", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 4"],
      selectedOptions: [],
      answer: ""
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    submitAnswer() {
      console.log("\u041E\u0442\u0432\u0435\u0442:", this.answer);
      console.log("\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:", this.selectedOptions);
      alert("\u041E\u0442\u0432\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-page" }, _attrs))} data-v-2940a70b>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-2940a70b><div class="header" data-v-2940a70b><button class="back-button" data-v-2940a70b>\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F</button><h2 data-v-2940a70b>\u0417\u0430\u0434\u0430\u0447\u0430</h2><p class="timestamp" data-v-2940a70b>18 \u044F\u043D\u0432\u0430\u0440\u044F 13:15</p></div><div class="task-description" data-v-2940a70b><h3 data-v-2940a70b>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438</h3><p data-v-2940a70b> \u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430-\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0434\u043B\u044F \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0439. </p><p data-v-2940a70b> \u0422\u0435\u043A\u0441\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0430\u0431\u0437\u0430\u0446\u0430\u043C\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0442 \u0434\u0432\u0443\u0445 \u0434\u043E \u0434\u0435\u0441\u044F\u0442\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439. </p></div><div class="options" data-v-2940a70b><!--[-->`);
  ssrRenderList($data.options, (option, index) => {
    _push(`<label class="option" data-v-2940a70b><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedOptions) ? ssrLooseContain($data.selectedOptions, option) : $data.selectedOptions) ? " checked" : ""} data-v-2940a70b> ${ssrInterpolate(option)}</label>`);
  });
  _push(`<!--]--></div><div class="answer-section" data-v-2940a70b><textarea placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u0442\u0432\u0435\u0442 \u0437\u0434\u0435\u0441\u044C..." data-v-2940a70b>${ssrInterpolate($data.answer)}</textarea><button class="submit-button" data-v-2940a70b> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/how-to-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2940a70b"]]);

export { howToWork as default };
//# sourceMappingURL=how-to-work-sBVVbNpX.mjs.map

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
  components: { Sidebar },
  data() {
    return {
      options: ["\u0412\u0430\u0440\u0438\u0430\u043D\u0442 1", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 2", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 3", "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 4"],
      selectedOptions: [],
      answer: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitAnswer() {
      console.log("\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:", this.selectedOptions);
      console.log("\u041E\u0442\u0432\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", this.answer);
      alert("\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-details" }, _attrs))} data-v-9305c6ff>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-9305c6ff><button class="back-btn" data-v-9305c6ff>\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F</button><h1 data-v-9305c6ff>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438</h1><p class="date" data-v-9305c6ff>18 \u044F\u043D\u0432\u0430\u0440\u044F 13:15</p><div class="task-text" data-v-9305c6ff><p data-v-9305c6ff> ... </p><p data-v-9305c6ff> ... </p></div><div class="options" data-v-9305c6ff><!--[-->`);
  ssrRenderList($data.options, (option, index) => {
    _push(`<label class="option" data-v-9305c6ff><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedOptions) ? ssrLooseContain($data.selectedOptions, option) : $data.selectedOptions) ? " checked" : ""} data-v-9305c6ff> ${ssrInterpolate(option)}</label>`);
  });
  _push(`<!--]--></div><div class="answer-box" data-v-9305c6ff><h3 data-v-9305c6ff>\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0442\u0432\u0435\u0442</h3><textarea rows="5" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0432\u0435\u0442\u0430" data-v-9305c6ff>${ssrInterpolate($data.answer)}</textarea><button class="submit-btn" data-v-9305c6ff>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taskDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9305c6ff"]]);

export { taskDetails as default };
//# sourceMappingURL=task-details-CjMhoxS-.mjs.map

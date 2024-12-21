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
      data: [
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "1213", author: "Фамилия Имя Отчество", status: "Принято" },
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "12", author: "Фамилия Имя Отчество", status: "Неверный ответ" },
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "1213", author: "Фамилия Имя Отчество", status: "Принято" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "system-state-page" }, _attrs))} data-v-ecd87fab>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-ecd87fab><h2 data-v-ecd87fab>Состояние системы</h2><p data-v-ecd87fab> По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыба текст. </p><table data-v-ecd87fab><thead data-v-ecd87fab><tr data-v-ecd87fab><th data-v-ecd87fab>ID</th><th data-v-ecd87fab>Дата</th><th data-v-ecd87fab>№ Задачи</th><th data-v-ecd87fab>Автор решения</th><th data-v-ecd87fab>Статус ответа</th></tr></thead><tbody data-v-ecd87fab><!--[-->`);
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
export {
  systemState as default
};
//# sourceMappingURL=system-state-C-lzRGBB.js.map

import { S as Sidebar } from "./Sidebar-Bop-tjAD.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
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
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      selectedOptions: [],
      answer: ""
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    submitAnswer() {
      console.log("Ответ:", this.answer);
      console.log("Выбранные варианты:", this.selectedOptions);
      alert("Ответ отправлен!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-page" }, _attrs))} data-v-2940a70b>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-2940a70b><div class="header" data-v-2940a70b><button class="back-button" data-v-2940a70b>Вернуться</button><h2 data-v-2940a70b>Задача</h2><p class="timestamp" data-v-2940a70b>18 января 13:15</p></div><div class="task-description" data-v-2940a70b><h3 data-v-2940a70b>Название задачи</h3><p data-v-2940a70b> Сайт рыба-текст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более осмысленного текста для макетов и презентаций. </p><p data-v-2940a70b> Текст генерируется абзацами случайным образом от двух до десяти предложений. </p></div><div class="options" data-v-2940a70b><!--[-->`);
  ssrRenderList($data.options, (option, index) => {
    _push(`<label class="option" data-v-2940a70b><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedOptions) ? ssrLooseContain($data.selectedOptions, option) : $data.selectedOptions) ? " checked" : ""} data-v-2940a70b> ${ssrInterpolate(option)}</label>`);
  });
  _push(`<!--]--></div><div class="answer-section" data-v-2940a70b><textarea placeholder="Введите ваш ответ здесь..." data-v-2940a70b>${ssrInterpolate($data.answer)}</textarea><button class="submit-button" data-v-2940a70b> Добавить ответ </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/how-to-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2940a70b"]]);
export {
  howToWork as default
};
//# sourceMappingURL=how-to-work-sBVVbNpX.js.map

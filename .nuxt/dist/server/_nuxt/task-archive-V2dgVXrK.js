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
      tasks: [
        {
          solved: "Да",
          id: 1,
          name: "Какое-то длинное название задачи",
          topic: "Какая-то длинная тема задачи",
          analysis: "Есть",
          difficulty: 1,
          solvability: 99,
          accepted: 1979907
        },
        {
          solved: "Нет",
          id: 54,
          name: "Какое-то длинное название задачи",
          topic: "Какая-то длинная тема задачи",
          analysis: "Нет",
          difficulty: 70,
          solvability: 20,
          accepted: 1476
        }
        // Добавьте ещё задачи по аналогии
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tasks-page" }, _attrs))} data-v-2b02034e>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-2b02034e><h1 data-v-2b02034e>Архив задач</h1><p class="description" data-v-2b02034e> По своей сути рыба-текст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличие от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. </p><table class="task-table" data-v-2b02034e><thead data-v-2b02034e><tr data-v-2b02034e><th data-v-2b02034e>Решено</th><th data-v-2b02034e>ID</th><th data-v-2b02034e>Название задачи</th><th data-v-2b02034e>Тема</th><th data-v-2b02034e>Разбор</th><th data-v-2b02034e>Сложность</th><th data-v-2b02034e>Решаемость</th><th data-v-2b02034e>Принято</th></tr></thead><tbody data-v-2b02034e><!--[-->`);
  ssrRenderList($data.tasks, (task) => {
    _push(`<tr data-v-2b02034e><td data-v-2b02034e>${ssrInterpolate(task.solved)}</td><td data-v-2b02034e>${ssrInterpolate(task.id)}</td><td data-v-2b02034e>${ssrInterpolate(task.name)}</td><td data-v-2b02034e>${ssrInterpolate(task.topic)}</td><td data-v-2b02034e>${ssrInterpolate(task.analysis)}</td><td data-v-2b02034e>${ssrInterpolate(task.difficulty)}%</td><td data-v-2b02034e>${ssrInterpolate(task.solvability)}%</td><td data-v-2b02034e>${ssrInterpolate(task.accepted)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task-archive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taskArchive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b02034e"]]);
export {
  taskArchive as default
};
//# sourceMappingURL=task-archive-V2dgVXrK.js.map

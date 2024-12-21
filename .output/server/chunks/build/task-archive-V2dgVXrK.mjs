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
      tasks: [
        {
          solved: "\u0414\u0430",
          id: 1,
          name: "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",
          topic: "\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u0437\u0430\u0434\u0430\u0447\u0438",
          analysis: "\u0415\u0441\u0442\u044C",
          difficulty: 1,
          solvability: 99,
          accepted: 1979907
        },
        {
          solved: "\u041D\u0435\u0442",
          id: 54,
          name: "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",
          topic: "\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u0437\u0430\u0434\u0430\u0447\u0438",
          analysis: "\u041D\u0435\u0442",
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
  _push(`<div class="content" data-v-2b02034e><h1 data-v-2b02034e>\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447</h1><p class="description" data-v-2b02034e> \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430-\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. </p><table class="task-table" data-v-2b02034e><thead data-v-2b02034e><tr data-v-2b02034e><th data-v-2b02034e>\u0420\u0435\u0448\u0435\u043D\u043E</th><th data-v-2b02034e>ID</th><th data-v-2b02034e>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438</th><th data-v-2b02034e>\u0422\u0435\u043C\u0430</th><th data-v-2b02034e>\u0420\u0430\u0437\u0431\u043E\u0440</th><th data-v-2b02034e>\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</th><th data-v-2b02034e>\u0420\u0435\u0448\u0430\u0435\u043C\u043E\u0441\u0442\u044C</th><th data-v-2b02034e>\u041F\u0440\u0438\u043D\u044F\u0442\u043E</th></tr></thead><tbody data-v-2b02034e><!--[-->`);
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

export { taskArchive as default };
//# sourceMappingURL=task-archive-V2dgVXrK.mjs.map

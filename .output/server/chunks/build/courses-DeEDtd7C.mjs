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
      courses: [
        {
          id: 1,
          title: "\u041E\u0441\u043D\u043E\u0432\u044B \u0430\u043D\u0430\u0442\u043E\u043C\u0438\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430",
          description: "\u041A\u0443\u0440\u0441 \u043E \u0431\u0430\u0437\u043E\u0432\u044B\u0445 \u0430\u0441\u043F\u0435\u043A\u0442\u0430\u0445 \u0430\u043D\u0430\u0442\u043E\u043C\u0438\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0430. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445.",
          duration: "4 \u043D\u0435\u0434\u0435\u043B\u0438",
          instructor: "\u041F\u0440\u043E\u0444. \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432"
        },
        {
          id: 2,
          title: "\u0424\u0430\u0440\u043C\u0430\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0434\u043B\u044F \u043C\u0435\u0434\u0438\u043A\u043E\u0432",
          description: "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432 \u0444\u0430\u0440\u043C\u0430\u043A\u043E\u043B\u043E\u0433\u0438\u0438: \u0432\u0438\u0434\u044B \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432, \u0438\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u043C \u0438 \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u044B.",
          duration: "6 \u043D\u0435\u0434\u0435\u043B\u044C",
          instructor: "\u0414\u043E\u043A\u0442. \u041C\u0430\u0440\u0438\u044F \u041F\u0435\u0442\u0440\u043E\u0432\u0430"
        },
        {
          id: 3,
          title: "\u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430",
          description: "\u041A\u0443\u0440\u0441 \u043F\u043E \u0444\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0438 \u0441 \u0430\u043A\u0446\u0435\u043D\u0442\u043E\u043C \u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0438 \u0438\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
          duration: "5 \u043D\u0435\u0434\u0435\u043B\u044C",
          instructor: "\u041F\u0440\u043E\u0444. \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u043C\u0438\u0440\u043D\u043E\u0432"
        },
        {
          id: 4,
          title: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u044D\u0442\u0438\u043A\u0430",
          description: "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u0438 \u043D\u043E\u0440\u043C \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u044D\u0442\u0438\u043A\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 \u0432 \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438.",
          duration: "3 \u043D\u0435\u0434\u0435\u043B\u0438",
          instructor: "\u0414\u043E\u043A\u0442. \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0430"
        }
      ]
    };
  },
  methods: {
    enroll(id) {
      alert(`\u0412\u044B \u0437\u0430\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u043A\u0443\u0440\u0441 \u0441 ID: ${id}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "courses-page" }, _attrs))} data-v-2d4395e0>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-2d4395e0><h2 data-v-2d4395e0>\u041A\u0443\u0440\u0441\u044B</h2><p data-v-2d4395e0> \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0432\u0430\u043C \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430\u0445. </p><!--[-->`);
  ssrRenderList($data.courses, (course) => {
    _push(`<div class="course-card" data-v-2d4395e0><h3 data-v-2d4395e0>${ssrInterpolate(course.title)}</h3><p data-v-2d4395e0>${ssrInterpolate(course.description)}</p><p data-v-2d4395e0><strong data-v-2d4395e0>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:</strong> ${ssrInterpolate(course.duration)}</p><p data-v-2d4395e0><strong data-v-2d4395e0>\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C:</strong> ${ssrInterpolate(course.instructor)}</p><button data-v-2d4395e0>\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441</button></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const courses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2d4395e0"]]);

export { courses as default };
//# sourceMappingURL=courses-DeEDtd7C.mjs.map

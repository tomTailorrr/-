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
      courses: [
        {
          id: 1,
          title: "Основы анатомии человека",
          description: "Курс о базовых аспектах анатомии человеческого организма. Идеально подходит для начинающих.",
          duration: "4 недели",
          instructor: "Проф. Иван Иванов"
        },
        {
          id: 2,
          title: "Фармакология для медиков",
          description: "Изучение основ фармакологии: виды лекарств, их взаимодействие с организмом и побочные эффекты.",
          duration: "6 недель",
          instructor: "Докт. Мария Петрова"
        },
        {
          id: 3,
          title: "Физиология человека",
          description: "Курс по физиологии с акцентом на системы органов и их взаимодействие.",
          duration: "5 недель",
          instructor: "Проф. Алексей Смирнов"
        },
        {
          id: 4,
          title: "Медицинская этика",
          description: "Изучение принципов и норм медицинской этики для профессионалов в здравоохранении.",
          duration: "3 недели",
          instructor: "Докт. Екатерина Сидорова"
        }
      ]
    };
  },
  methods: {
    enroll(id) {
      alert(`Вы записались на курс с ID: ${id}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "courses-page" }, _attrs))} data-v-2d4395e0>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-2d4395e0><h2 data-v-2d4395e0>Курсы</h2><p data-v-2d4395e0> Здесь представлены доступные курсы, которые помогут вам улучшить ваши знания в различных медицинских дисциплинах. </p><!--[-->`);
  ssrRenderList($data.courses, (course) => {
    _push(`<div class="course-card" data-v-2d4395e0><h3 data-v-2d4395e0>${ssrInterpolate(course.title)}</h3><p data-v-2d4395e0>${ssrInterpolate(course.description)}</p><p data-v-2d4395e0><strong data-v-2d4395e0>Продолжительность:</strong> ${ssrInterpolate(course.duration)}</p><p data-v-2d4395e0><strong data-v-2d4395e0>Преподаватель:</strong> ${ssrInterpolate(course.instructor)}</p><button data-v-2d4395e0>Записаться на курс</button></div>`);
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
export {
  courses as default
};
//# sourceMappingURL=courses-DeEDtd7C.js.map

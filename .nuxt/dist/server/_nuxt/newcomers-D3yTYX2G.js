import { S as Sidebar } from "./Sidebar-Bop-tjAD.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BXxPlIRz.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "newcomers-page" }, _attrs))} data-v-a6b7179d>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-a6b7179d><h2 data-v-a6b7179d>Новичкам</h2><p data-v-a6b7179d> Добро пожаловать на платформу! Если вы только начинаете свой путь в изучении медицинской науки или хотите улучшить свои знания, мы готовы вам помочь. Здесь вы найдете все необходимые ресурсы для начала. </p><h3 data-v-a6b7179d>Шаги для начала:</h3><ol data-v-a6b7179d><li data-v-a6b7179d><strong data-v-a6b7179d>Изучите базовые дисциплины:</strong> Начните с наших курсов по анатомии, физиологии, фармакологии и другим дисциплинам.</li><li data-v-a6b7179d><strong data-v-a6b7179d>Присоединяйтесь к олимпиадам:</strong> Проверьте свои знания в различных олимпиадах и получайте награды.</li><li data-v-a6b7179d><strong data-v-a6b7179d>Читайте статьи и руководства:</strong> Изучайте статьи по актуальным темам, читайте полезные советы для новичков.</li><li data-v-a6b7179d><strong data-v-a6b7179d>Не бойтесь задавать вопросы:</strong> Форум доступен для общения с опытными пользователями и преподавателями.</li></ol><h3 data-v-a6b7179d>Полезные ссылки:</h3><ul data-v-a6b7179d><li data-v-a6b7179d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Курсы`);
      } else {
        return [
          createTextVNode("Курсы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - Начните обучение с наших онлайн-курсов по медицине.</li><li data-v-a6b7179d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/olympiads" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Олимпиады`);
      } else {
        return [
          createTextVNode("Олимпиады")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - Присоединяйтесь к олимпиадам и проверьте свои знания.</li><li data-v-a6b7179d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/forum" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Форум`);
      } else {
        return [
          createTextVNode("Форум")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - Обсуждайте и задавайте вопросы на нашем форуме.</li></ul><h3 data-v-a6b7179d>Советы для успешного обучения:</h3><ul data-v-a6b7179d><li data-v-a6b7179d>Регулярно повторяйте материал, чтобы закрепить знания.</li><li data-v-a6b7179d>Используйте дополнительные ресурсы, такие как видеоуроки и книги.</li><li data-v-a6b7179d>Не стесняйтесь обращаться за помощью к преподавателям или другим пользователям платформы.</li></ul><h3 data-v-a6b7179d>Начните с малого:</h3><p data-v-a6b7179d>Не торопитесь! Учебный процесс не должен быть стрессом. Вы можете начинать с любого курса и постепенно увеличивать сложность задач.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newcomers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newcomers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a6b7179d"]]);
export {
  newcomers as default
};
//# sourceMappingURL=newcomers-D3yTYX2G.js.map

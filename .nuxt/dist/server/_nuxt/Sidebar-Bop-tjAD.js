import { _ as __nuxt_component_0 } from "./nuxt-link-BXxPlIRz.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-6bdea933><div class="section profile" data-v-6bdea933><h2 data-v-6bdea933>Medical School</h2><div class="profile-info" data-v-6bdea933><div class="avatar" data-v-6bdea933></div><div class="details" data-v-6bdea933><p data-v-6bdea933>Фамилия Имя Отчество</p><p data-v-6bdea933>Ур. 1 <span data-v-6bdea933>🔷</span></p></div><button class="edit-btn" data-v-6bdea933>Редактировать</button></div></div><div class="section" data-v-6bdea933><h3 data-v-6bdea933>Информация</h3><ul data-v-6bdea933><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О школе`);
      } else {
        return [
          createTextVNode("О школе")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/rules" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Правила`);
      } else {
        return [
          createTextVNode("Правила")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
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
  _push(`</li><li data-v-6bdea933>`);
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
  _push(`</li></ul></div><div class="section" data-v-6bdea933><h3 data-v-6bdea933>Задачник</h3><ul data-v-6bdea933><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/task-archive" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Архив задач`);
      } else {
        return [
          createTextVNode("Архив задач")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/system-state" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Состояние системы`);
      } else {
        return [
          createTextVNode("Состояние системы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/ratings" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Рейтинг`);
      } else {
        return [
          createTextVNode("Рейтинг")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
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
  _push(`</li></ul></div><div class="section" data-v-6bdea933><h3 data-v-6bdea933>Методичка</h3><ul data-v-6bdea933><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/newcomers" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Новичкам`);
      } else {
        return [
          createTextVNode("Новичкам")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Статьи`);
      } else {
        return [
          createTextVNode("Статьи")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/links" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ссылки`);
      } else {
        return [
          createTextVNode("Ссылки")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6bdea933>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how-to-work" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Работа в системе`);
      } else {
        return [
          createTextVNode("Работа в системе")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6bdea933"]]);
export {
  Sidebar as S
};
//# sourceMappingURL=Sidebar-Bop-tjAD.js.map

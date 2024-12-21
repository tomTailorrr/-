import { S as Sidebar } from './Sidebar-Bop-tjAD.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BXxPlIRz.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
      topics: [
        {
          id: 1,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 13:15",
          description: "..."
        },
        {
          id: 2,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 10:57",
          description: "..."
        },
        {
          id: 3,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 10:40",
          description: "..."
        },
        {
          id: 4,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 13:00",
          description: "..."
        },
        {
          id: 5,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 13:10",
          description: "..."
        },
        {
          id: 6,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 21:15",
          description: "..."
        },
        {
          id: 7,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 20:15",
          description: "..."
        },
        {
          id: 8,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 11:15",
          description: "..."
        },
        {
          id: 9,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 18:15",
          description: "..."
        },
        {
          id: 10,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 17:15",
          description: "..."
        },
        {
          id: 11,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 11:15",
          description: "..."
        },
        {
          id: 12,
          title: " \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043C\u044B",
          author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.",
          date: "18 \u044F\u043D\u0432\u0430\u0440\u044F 15:15",
          description: "..."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "forum" }, _attrs))} data-v-8b2c8919>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-8b2c8919><h1 data-v-8b2c8919>\u0424\u043E\u0440\u0443\u043C</h1><div class="topics-grid" data-v-8b2c8919><!--[-->`);
  ssrRenderList($data.topics, (topic, index) => {
    _push(`<div class="topic-card" data-v-8b2c8919><h3 data-v-8b2c8919>${ssrInterpolate(topic.title)}</h3><p class="author" data-v-8b2c8919>${ssrInterpolate(topic.author)} \u2022 ${ssrInterpolate(topic.date)}</p><p class="description" data-v-8b2c8919>${ssrInterpolate(topic.description)}</p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/forum/" + topic.id,
      class: "details-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
        } else {
          return [
            createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8b2c8919"]]);

export { forum as default };
//# sourceMappingURL=forum-CieP29Tc.mjs.map

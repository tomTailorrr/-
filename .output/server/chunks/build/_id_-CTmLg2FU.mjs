import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  async asyncData({ params }) {
    const topicId = params.topicId;
    const mockData = {
      id: topicId,
      title: "\u0422\u0435\u043C\u0430, \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B",
      messages: [
        { id: 1, author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.", text: "\u041F\u0435\u0440\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B" },
        { id: 2, author: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418. \u041E.", text: "\u0412\u0442\u043E\u0440\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B" }
      ]
    };
    return { topic: mockData };
  },
  data() {
    return {
      newMessage: ""
    };
  },
  methods: {
    submitAnswer() {
      if (this.newMessage.trim()) {
        this.topic.messages.push({
          id: this.topic.messages.length + 1,
          author: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
          text: this.newMessage
        });
        this.newMessage = "";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "forum-topic" }, _attrs))} data-v-cde08ab0><h1 data-v-cde08ab0>${ssrInterpolate(_ctx.topic.title)}</h1><div class="messages" data-v-cde08ab0><!--[-->`);
  ssrRenderList(_ctx.topic.messages, (message) => {
    _push(`<div class="message" data-v-cde08ab0><p data-v-cde08ab0><strong data-v-cde08ab0>${ssrInterpolate(message.author)}</strong>: ${ssrInterpolate(message.text)}</p></div>`);
  });
  _push(`<!--]--></div><form data-v-cde08ab0><textarea placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u0442\u0432\u0435\u0442" required data-v-cde08ab0>${ssrInterpolate($data.newMessage)}</textarea><button type="submit" data-v-cde08ab0>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forum/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cde08ab0"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CTmLg2FU.mjs.map

import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "element-plus";
const _sfc_main = {
  async asyncData({ params }) {
    const topicId = params.topicId;
    const mockData = {
      id: topicId,
      title: "Тема, большое длинное название темы",
      messages: [
        { id: 1, author: "Фамилия И. О.", text: "Первое сообщение темы" },
        { id: 2, author: "Фамилия И. О.", text: "Второе сообщение темы" }
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
          author: "Ваше имя",
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
  _push(`<!--]--></div><form data-v-cde08ab0><textarea placeholder="Введите ваш ответ" required data-v-cde08ab0>${ssrInterpolate($data.newMessage)}</textarea><button type="submit" data-v-cde08ab0>Добавить ответ</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forum/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cde08ab0"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CTmLg2FU.js.map

import { S as Sidebar } from "./Sidebar-Bop-tjAD.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = Sidebar;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "links-page" }, _attrs))} data-v-82c9f701>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-82c9f701><h1 data-v-82c9f701>Полезные ссылки</h1><p data-v-82c9f701> Здесь собраны ресурсы, которые помогут вам углубить знания в области медицины и эффективно использовать платформу. </p><h2 data-v-82c9f701>Образовательные ресурсы:</h2><ul data-v-82c9f701><li data-v-82c9f701><a href="https://www.medicalnewstoday.com/" target="_blank" data-v-82c9f701>Medical News Today</a> - Последние новости и исследования.</li><li data-v-82c9f701><a href="https://www.ncbi.nlm.nih.gov/" target="_blank" data-v-82c9f701>NCBI</a> - Огромная база научных публикаций.</li><li data-v-82c9f701><a href="https://www.khanacademy.org/science/health-and-medicine" target="_blank" data-v-82c9f701>Khan Academy: Health and Medicine</a> - Бесплатные образовательные курсы.</li></ul><h2 data-v-82c9f701>Ресурсы для олимпиад и тестов:</h2><ul data-v-82c9f701><li data-v-82c9f701><a href="https://www.medicalolympiad.org/" target="_blank" data-v-82c9f701>Medical Olympiad</a> - Международные соревнования по медицине.</li><li data-v-82c9f701><a href="https://www.quizlet.com" target="_blank" data-v-82c9f701>Quizlet</a> - Флеш-карты и викторины для подготовки.</li></ul><h2 data-v-82c9f701>Полезные статьи:</h2><ul data-v-82c9f701><li data-v-82c9f701><a href="https://www.mayoclinic.org/" target="_blank" data-v-82c9f701>Mayo Clinic</a> - Подробная информация о заболеваниях и лечении.</li><li data-v-82c9f701><a href="https://www.healthline.com/" target="_blank" data-v-82c9f701>Healthline</a> - Полезные советы по медицине и здоровью.</li></ul><h2 data-v-82c9f701>Форумы и сообщества:</h2><ul data-v-82c9f701><li data-v-82c9f701><a href="https://reddit.com/r/medicine/" target="_blank" data-v-82c9f701>Reddit Medicine</a> - Популярный форум для обсуждения медицинских вопросов.</li><li data-v-82c9f701><a href="https://forums.studentdoctor.net/" target="_blank" data-v-82c9f701>Student Doctor Network</a> - Сообщество студентов и профессионалов медицины.</li></ul><h2 data-v-82c9f701>Ресурсы для карьерного роста:</h2><ul data-v-82c9f701><li data-v-82c9f701><a href="https://www.medicare.gov/" target="_blank" data-v-82c9f701>Medicare</a> - Полезные данные для специалистов здравоохранения.</li><li data-v-82c9f701><a href="https://www.indeed.com/q-Medical-jobs.html" target="_blank" data-v-82c9f701>Поиск работы в медицине</a> - Вакансии в медицинской сфере.</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const links = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-82c9f701"]]);
export {
  links as default
};
//# sourceMappingURL=links-Dd4f8pkJ.js.map

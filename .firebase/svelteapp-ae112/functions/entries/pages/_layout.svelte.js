import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { u as userData, a as user } from "../../chunks/firebase.js";
import "firebase/auth";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  $$unsubscribe_userData();
  return `<div class="relative inline-block text-left"><button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-500" data-svelte-h="svelte-1bvb3qe">Settings
    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button> ${``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $$unsubscribe_user;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `<div class="min-h-screen flex flex-col"><div class="flex justify-between items-center px-4 py-2"><a href="/" class="text-xl font-bold " data-svelte-h="svelte-jdlul5">Linknest</a> ${$userData?.username ? `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {})}` : ``}</div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};

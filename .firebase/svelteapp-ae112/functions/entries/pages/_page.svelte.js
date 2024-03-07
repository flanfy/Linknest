import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { u as userData } from "../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-5yegz7_START -->${$$result.title = `<title>Linknest</title>`, ""}<!-- HEAD_svelte-5yegz7_END -->`, ""} <main class="flex w-full min-h-screen"><div class="hero bg-base-200"><div class="hero-content text-center"><div class="w-full"><h1 class="text-7xl font-bold" data-svelte-h="svelte-14hezyr">Linknest</h1> <img src="chicken.png" alt="chicken" style="width: 100px; height: auto; display: block; margin: 0 auto;"> <p class="py-6 text-2xl" data-svelte-h="svelte-18180bf">One simple link to share your entire developer portfolio</p> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true) + "/edit"}" class="btn btn-primary">Edit Profile</a>` : `<a href="/login" class="btn btn-primary" data-svelte-h="svelte-izohf9">Get Started</a> <a href="/flan" class="btn btn-secondary" data-svelte-h="svelte-1367h37">Phillip&#39;s Profile</a>`}</div></div></div></main>`;
});
export {
  Page as default
};

import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.Cd4EkueA.js","_app/immutable/chunks/scheduler.B0JEHspW.js","_app/immutable/chunks/index.jKw0lUt7.js","_app/immutable/chunks/stores.DKWksBp8.js","_app/immutable/chunks/entry.7gQ7v3rf.js","_app/immutable/chunks/index.6bbcaYGK.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/firebase.oGd3CV5t.js"];
export const stylesheets = [];
export const fonts = [];

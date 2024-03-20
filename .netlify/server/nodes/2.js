

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Co7N1vgu.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DBHdHoKw.js"];
export const stylesheets = ["_app/immutable/assets/2.DbqiBDb6.css"];
export const fonts = [];

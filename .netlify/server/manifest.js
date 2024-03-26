export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/honeycomb-background.avif","style/footer.css","style/header.css","style/reset.css","style/root.css"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.FRJ3CMF9.js","app":"_app/immutable/entry/app.DKb-H14p.js","imports":["_app/immutable/entry/start.FRJ3CMF9.js","_app/immutable/chunks/entry.DeVbTgmT.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DKb-H14p.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DBHdHoKw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DKLeY-f9.mjs';
import { manifest } from './manifest_CETu2zje.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_vtbot_inspection_chamber.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/auth/register.astro.mjs');
const _page4 = () => import('./pages/api/auth/signin.astro.mjs');
const _page5 = () => import('./pages/api/auth/signout.astro.mjs');
const _page6 = () => import('./pages/dashboard.astro.mjs');
const _page7 = () => import('./pages/forgot-password.astro.mjs');
const _page8 = () => import('./pages/register.astro.mjs');
const _page9 = () => import('./pages/signin.astro.mjs');
const _page10 = () => import('./pages/vortex.astro.mjs');
const _page11 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["node_modules/astro-vtbot/components/InspectionChamber.astro", _page1],
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page2],
    ["src/pages/api/auth/register.ts", _page3],
    ["src/pages/api/auth/signin.ts", _page4],
    ["src/pages/api/auth/signout.ts", _page5],
    ["src/pages/dashboard.astro", _page6],
    ["src/pages/forgot-password.astro", _page7],
    ["src/pages/register.astro", _page8],
    ["src/pages/signin.astro", _page9],
    ["src/pages/vortex.astro", _page10],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///Users/joost/git/developer.fashionunited.com/dist/client/",
    "server": "file:///Users/joost/git/developer.fashionunited.com/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

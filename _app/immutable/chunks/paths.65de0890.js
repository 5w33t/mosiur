import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function d(i,l=c){let n;const o=new Set;function r(t){if(p(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_p350v0)==null?void 0:f.base)??"/mosiur";var a;const m=((a=globalThis.__sveltekit_p350v0)==null?void 0:a.assets)??h;export{m as a,h as b,d as w};

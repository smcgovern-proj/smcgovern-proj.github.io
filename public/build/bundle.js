var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){t.parentNode.removeChild(t)}let a;function i(t){a=t}const l=[],u=[],f=[],d=[],p=Promise.resolve();let h=!1;function m(t){f.push(t)}let $=!1;const g=new Set;function b(){if(!$){$=!0;do{for(let t=0;t<l.length;t+=1){const e=l[t];i(e),v(e.$$)}for(i(null),l.length=0;u.length;)u.pop()();for(let t=0;t<f.length;t+=1){const e=f[t];g.has(e)||(g.add(e),e())}f.length=0}while(l.length);for(;d.length;)d.pop()();h=!1,$=!1,g.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(m)}}const y=new Set;function _(t,e){-1===t.$$.dirty[0]&&(l.push(t),h||(h=!0,p.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(s,l,u,f,d,p,h,$=[-1]){const g=a;i(s);const v=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:l.context||[]),callbacks:n(),dirty:$,skip_bound:!1,root:l.target||g.$$.root};h&&h(v.root);let x=!1;if(v.ctx=u?u(s,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&d(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),x&&_(s,t)),e})):[],v.update(),x=!0,o(v.before_update),v.fragment=!!f&&f(v.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);v.fragment&&v.fragment.l(t),t.forEach(c)}else v.fragment&&v.fragment.c();l.intro&&((w=s.$$.fragment)&&w.i&&(y.delete(w),w.i(k))),function(t,n,s,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,s),c||m((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(m)}(s,l.target,l.anchor,l.customElement),b()}var w,k;i(g)}function w(e){let n;return{c(){var t,e,o,r;t="main",n=document.createElement(t),n.innerHTML='<div class="sidebar svelte-13ozi5o"><img src="http://placecorgi.com/260/180" alt="either me or a corgi" class="svelte-13ozi5o"/> \n    <h1 class="name svelte-13ozi5o">Sean McGovern</h1> \n    <p class="bio svelte-13ozi5o">Hi! I&#39;m a full-stack web developer and UX-dabbler based in Washington, D.C. I believe in constant self-improvement, in design/dev as a means of advocating for the end user, and in always seasoning your pasta water. Connect with me below:</p></div> \n  <div class="body svelte-13ozi5o"></div>',e=n,o="class",null==(r="svelte-13ozi5o")?e.removeAttribute(o):e.getAttribute(o)!==r&&e.setAttribute(o,r)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,null,w,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

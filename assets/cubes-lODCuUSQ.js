import{R as Mt,b as Pt,E as $t,V as x,c as I,T as H,Q as Ye,d as Ge,e as C,f as Tt,U as at,g as oe,h as Ot,i as se,j as rt,I as kt,F as We,k as we,l as R,m as lt,n as zt,a as jt,W as It,S as Ht,P as Rt,o as Ke,C as Xe}from"./three.module-ivnPivDZ.js";var Y=function(){var d=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(r){r.preventDefault(),e(++d%t.children.length)},!1);function n(r){return t.appendChild(r.dom),r}function e(r){for(var p=0;p<t.children.length;p++)t.children[p].style.display=p===r?"block":"none";d=r}var o=(performance||Date).now(),s=o,a=0,c=n(new Y.Panel("FPS","#0ff","#002")),u=n(new Y.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var g=n(new Y.Panel("MB","#f08","#201"));return e(0),{REVISION:16,dom:t,addPanel:n,showPanel:e,begin:function(){o=(performance||Date).now()},end:function(){a++;var r=(performance||Date).now();if(u.update(r-o,200),r>=s+1e3&&(c.update(a*1e3/(r-s),100),s=r,a=0,g)){var p=performance.memory;g.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return r},update:function(){o=this.end()},domElement:t,setMode:e}};Y.Panel=function(d,t,n){var e=1/0,o=0,s=Math.round,a=s(window.devicePixelRatio||1),c=80*a,u=48*a,g=3*a,r=2*a,p=3*a,h=15*a,b=74*a,y=30*a,A=document.createElement("canvas");A.width=c,A.height=u,A.style.cssText="width:80px;height:48px";var f=A.getContext("2d");return f.font="bold "+9*a+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=n,f.fillRect(0,0,c,u),f.fillStyle=t,f.fillText(d,g,r),f.fillRect(p,h,b,y),f.fillStyle=n,f.globalAlpha=.9,f.fillRect(p,h,b,y),{dom:A,update:function(E,S){e=Math.min(e,E),o=Math.max(o,E),f.fillStyle=n,f.globalAlpha=1,f.fillRect(0,0,c,h),f.fillStyle=t,f.fillText(s(E)+" "+d+" ("+s(e)+"-"+s(o)+")",g,r),f.drawImage(A,p+a,h,b-a,y,p,h,b-a,y),f.fillRect(p+b-a,h,a,y),f.fillStyle=n,f.globalAlpha=.9,f.fillRect(p+b-a,h,a,s((1-E/S)*y))}}};const Ft=Y;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class D{constructor(t,n,e,o,s="div"){this.parent=t,this.object=n,this.property=e,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),D.nextNameID=D.nextNameID||0,this.$name.id="lil-gui-name-"+ ++D.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(e)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ut extends D{constructor(t,n,e){super(t,n,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ye(d){let t,n;return(t=d.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&"#"+n}const Nt={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:ye,toHexString:ye},G={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},Bt={isPrimitive:!1,match:Array.isArray,fromHexString(d,t,n=1){const e=G.fromHexString(d);t[0]=(e>>16&255)/255*n,t[1]=(e>>8&255)/255*n,t[2]=(255&e)/255*n},toHexString:([d,t,n],e=1)=>G.toHexString(d*(e=255/e)<<16^t*e<<8^n*e<<0)},Vt={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,t,n=1){const e=G.fromHexString(d);t.r=(e>>16&255)/255*n,t.g=(e>>8&255)/255*n,t.b=(255&e)/255*n},toHexString:({r:d,g:t,b:n},e=1)=>G.toHexString(d*(e=255/e)<<16^t*e<<8^n*e<<0)},Yt=[Nt,G,Bt,Vt];class Gt extends D{constructor(t,n,e,o){var s;super(t,n,e,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Yt.find(a=>a.match(s))),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=ye(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ge extends D{constructor(t,n,e){super(t,n,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Wt extends D{constructor(t,n,e,o,s,a){super(t,n,e,"number"),this._initInput(),this.min(o),this.max(s);const c=a!==void 0;this.step(c?a:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=100*n+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=r=>{const p=parseFloat(this.$input.value);isNaN(p)||(this._snapClampSetValue(p+r),this.$input.value=this.getValue())};let n,e,o,s,a,c=!1;const u=r=>{if(c){const p=r.clientX-n,h=r.clientY-e;Math.abs(h)>5?(r.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(p)>5&&g()}if(!c){const p=r.clientY-o;a-=p*this._step*this._arrowKeyMultiplier(r),s+a>this._max?a=this._max-s:s+a<this._min&&(a=this._min-s),this._snapClampSetValue(s+a)}o=r.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",g)};this.$input.addEventListener("input",()=>{let r=parseFloat(this.$input.value);isNaN(r)||(this._stepExplicit&&(r=this._snap(r)),this.setValue(this._clamp(r)))}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur(),r.code==="ArrowUp"&&(r.preventDefault(),t(this._step*this._arrowKeyMultiplier(r))),r.code==="ArrowDown"&&(r.preventDefault(),t(this._step*this._arrowKeyMultiplier(r)*-1))}),this.$input.addEventListener("wheel",r=>{this._inputFocused&&(r.preventDefault(),t(this._step*this._normalizeMouseWheel(r)))},{passive:!1}),this.$input.addEventListener("mousedown",r=>{n=r.clientX,e=o=r.clientY,c=!0,s=this.getValue(),a=0,window.addEventListener("mousemove",u),window.addEventListener("mouseup",g)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=h=>{const b=this.$slider.getBoundingClientRect();let y=(A=h,f=b.left,E=b.right,S=this._min,T=this._max,(A-f)/(E-f)*(T-S)+S);var A,f,E,S,T;this._snapClampSetValue(y)},n=h=>{t(h.clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",e)};let o,s,a=!1;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),a=!1},u=h=>{if(a){const b=h.touches[0].clientX-o,y=h.touches[0].clientY-s;Math.abs(b)>Math.abs(y)?c(h):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",g))}else h.preventDefault(),t(h.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",g)},r=this._callOnFinishChange.bind(this);let p;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",e)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(o=h.touches[0].clientX,s=h.touches[0].clientY,a=!0):c(h),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",g))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const b=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(r,400)},{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+n,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:e}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10),n+-e}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){const n=Math.round(t/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Kt extends D{constructor(t,n,e,o){super(t,n,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?t:this._names[n],this}}class Xt extends D{constructor(t,n,e){super(t,n,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ze=!1;class Ce{constructor({parent:t,autoPlace:n=t===void 0,container:e,width:o,title:s="Controls",injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{u.code!=="Enter"&&u.code!=="Space"||(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),c&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ze&&a&&(function(u){const g=document.createElement("style");g.innerHTML=u;const r=document.querySelector("head link[rel=stylesheet], head style");r?document.head.insertBefore(g,r):document.head.appendChild(g)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ze=!0),e?e.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation())}add(t,n,e,o,s){if(Object(e)===e)return new Kt(this,t,n,e);const a=t[n];switch(typeof a){case"number":return new Wt(this,t,n,e,o,s);case"boolean":return new Ut(this,t,n);case"string":return new Xt(this,t,n);case"function":return new ge(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,a)}addColor(t,n,e=1){return new Gt(this,t,n,e)}addFolder(t){return new Ce({parent:this,title:t})}load(t,n=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof ge||e._name in t.controllers&&e.load(t.controllers[e._name])}),n&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof ge)){if(e._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);n.controllers[e._name]=e.save()}}),t&&this.folders.forEach(e=>{if(e._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);n.folders[e._title]=e.save()}),n}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const e=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}const Je={type:"change"},be={type:"start"},qe={type:"end"},ee=new Mt,Qe=new Pt,Zt=Math.cos(70*Tt.DEG2RAD);class Jt extends $t{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:I.ROTATE,MIDDLE:I.DOLLY,RIGHT:I.PAN},this.touches={ONE:H.ROTATE,TWO:H.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(i){i.addEventListener("keydown",pe),this._domElementKeyEvents=i},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pe),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Je),e.update(),s=o.NONE},this.update=function(){const i=new x,l=new Ye().setFromUnitVectors(t.up,new x(0,1,0)),v=l.clone().invert(),w=new x,_=new Ye,j=new x,k=2*Math.PI;return function(Dt=null){const Ve=e.object.position;i.copy(Ve).sub(e.target),i.applyQuaternion(l),c.setFromVector3(i),e.autoRotate&&s===o.NONE&&U(ht(Dt)),e.enableDamping?(c.theta+=u.theta*e.dampingFactor,c.phi+=u.phi*e.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);let M=e.minAzimuthAngle,P=e.maxAzimuthAngle;isFinite(M)&&isFinite(P)&&(M<-Math.PI?M+=k:M>Math.PI&&(M-=k),P<-Math.PI?P+=k:P>Math.PI&&(P-=k),M<=P?c.theta=Math.max(M,Math.min(P,c.theta)):c.theta=c.theta>(M+P)/2?Math.max(M,c.theta):Math.min(P,c.theta)),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(r,e.dampingFactor):e.target.add(r),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&X||e.object.isOrthographicCamera?c.radius=he(c.radius):c.radius=he(c.radius*g),i.setFromSpherical(c),i.applyQuaternion(v),Ve.copy(e.target).add(i),e.object.lookAt(e.target),e.enableDamping===!0?(u.theta*=1-e.dampingFactor,u.phi*=1-e.dampingFactor,r.multiplyScalar(1-e.dampingFactor)):(u.set(0,0,0),r.set(0,0,0));let me=!1;if(e.zoomToCursor&&X){let B=null;if(e.object.isPerspectiveCamera){const V=i.length();B=he(V*g);const Q=V-B;e.object.position.addScaledVector(Le,Q),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const V=new x(O.x,O.y,0);V.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/g)),e.object.updateProjectionMatrix(),me=!0;const Q=new x(O.x,O.y,0);Q.unproject(e.object),e.object.position.sub(Q).add(V),e.object.updateMatrixWorld(),B=i.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;B!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(B).add(e.object.position):(ee.origin.copy(e.object.position),ee.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(ee.direction))<Zt?t.lookAt(e.target):(Qe.setFromNormalAndCoplanarPoint(e.object.up,e.target),ee.intersectPlane(Qe,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/g)),e.object.updateProjectionMatrix(),me=!0);return g=1,X=!1,me||w.distanceToSquared(e.object.position)>a||8*(1-_.dot(e.object.quaternion))>a||j.distanceToSquared(e.target)>0?(e.dispatchEvent(Je),w.copy(e.object.position),_.copy(e.object.quaternion),j.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Ne),e.domElement.removeEventListener("pointerdown",Fe),e.domElement.removeEventListener("pointercancel",N),e.domElement.removeEventListener("wheel",Ue),e.domElement.removeEventListener("pointermove",ue),e.domElement.removeEventListener("pointerup",N),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",pe),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const a=1e-6,c=new Ge,u=new Ge;let g=1;const r=new x,p=new C,h=new C,b=new C,y=new C,A=new C,f=new C,E=new C,S=new C,T=new C,Le=new x,O=new C;let X=!1;const m=[],Z={};function ht(i){return i!==null?2*Math.PI/60*e.autoRotateSpeed*i:2*Math.PI/60/60*e.autoRotateSpeed}function J(){return Math.pow(.95,e.zoomSpeed)}function U(i){u.theta-=i}function q(i){u.phi-=i}const De=function(){const i=new x;return function(v,w){i.setFromMatrixColumn(w,0),i.multiplyScalar(-v),r.add(i)}}(),Me=function(){const i=new x;return function(v,w){e.screenSpacePanning===!0?i.setFromMatrixColumn(w,1):(i.setFromMatrixColumn(w,0),i.crossVectors(e.object.up,i)),i.multiplyScalar(v),r.add(i)}}(),z=function(){const i=new x;return function(v,w){const _=e.domElement;if(e.object.isPerspectiveCamera){const j=e.object.position;i.copy(j).sub(e.target);let k=i.length();k*=Math.tan(e.object.fov/2*Math.PI/180),De(2*v*k/_.clientHeight,e.object.matrix),Me(2*w*k/_.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(De(v*(e.object.right-e.object.left)/e.object.zoom/_.clientWidth,e.object.matrix),Me(w*(e.object.top-e.object.bottom)/e.object.zoom/_.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function ce(i){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?g/=i:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Pe(i){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?g*=i:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function $e(i){if(!e.zoomToCursor)return;X=!0;const l=e.domElement.getBoundingClientRect(),v=i.clientX-l.left,w=i.clientY-l.top,_=l.width,j=l.height;O.x=v/_*2-1,O.y=-(w/j)*2+1,Le.set(O.x,O.y,1).unproject(e.object).sub(e.object.position).normalize()}function he(i){return Math.max(e.minDistance,Math.min(e.maxDistance,i))}function Te(i){p.set(i.clientX,i.clientY)}function ut(i){$e(i),E.set(i.clientX,i.clientY)}function Oe(i){y.set(i.clientX,i.clientY)}function pt(i){h.set(i.clientX,i.clientY),b.subVectors(h,p).multiplyScalar(e.rotateSpeed);const l=e.domElement;U(2*Math.PI*b.x/l.clientHeight),q(2*Math.PI*b.y/l.clientHeight),p.copy(h),e.update()}function ft(i){S.set(i.clientX,i.clientY),T.subVectors(S,E),T.y>0?ce(J()):T.y<0&&Pe(J()),E.copy(S),e.update()}function mt(i){A.set(i.clientX,i.clientY),f.subVectors(A,y).multiplyScalar(e.panSpeed),z(f.x,f.y),y.copy(A),e.update()}function gt(i){$e(i),i.deltaY<0?Pe(J()):i.deltaY>0&&ce(J()),e.update()}function bt(i){let l=!1;switch(i.code){case e.keys.UP:i.ctrlKey||i.metaKey||i.shiftKey?q(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):z(0,e.keyPanSpeed),l=!0;break;case e.keys.BOTTOM:i.ctrlKey||i.metaKey||i.shiftKey?q(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):z(0,-e.keyPanSpeed),l=!0;break;case e.keys.LEFT:i.ctrlKey||i.metaKey||i.shiftKey?U(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):z(e.keyPanSpeed,0),l=!0;break;case e.keys.RIGHT:i.ctrlKey||i.metaKey||i.shiftKey?U(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):z(-e.keyPanSpeed,0),l=!0;break}l&&(i.preventDefault(),e.update())}function ke(){if(m.length===1)p.set(m[0].pageX,m[0].pageY);else{const i=.5*(m[0].pageX+m[1].pageX),l=.5*(m[0].pageY+m[1].pageY);p.set(i,l)}}function ze(){if(m.length===1)y.set(m[0].pageX,m[0].pageY);else{const i=.5*(m[0].pageX+m[1].pageX),l=.5*(m[0].pageY+m[1].pageY);y.set(i,l)}}function je(){const i=m[0].pageX-m[1].pageX,l=m[0].pageY-m[1].pageY,v=Math.sqrt(i*i+l*l);E.set(0,v)}function vt(){e.enableZoom&&je(),e.enablePan&&ze()}function wt(){e.enableZoom&&je(),e.enableRotate&&ke()}function Ie(i){if(m.length==1)h.set(i.pageX,i.pageY);else{const v=fe(i),w=.5*(i.pageX+v.x),_=.5*(i.pageY+v.y);h.set(w,_)}b.subVectors(h,p).multiplyScalar(e.rotateSpeed);const l=e.domElement;U(2*Math.PI*b.x/l.clientHeight),q(2*Math.PI*b.y/l.clientHeight),p.copy(h)}function He(i){if(m.length===1)A.set(i.pageX,i.pageY);else{const l=fe(i),v=.5*(i.pageX+l.x),w=.5*(i.pageY+l.y);A.set(v,w)}f.subVectors(A,y).multiplyScalar(e.panSpeed),z(f.x,f.y),y.copy(A)}function Re(i){const l=fe(i),v=i.pageX-l.x,w=i.pageY-l.y,_=Math.sqrt(v*v+w*w);S.set(0,_),T.set(0,Math.pow(S.y/E.y,e.zoomSpeed)),ce(T.y),E.copy(S)}function yt(i){e.enableZoom&&Re(i),e.enablePan&&He(i)}function At(i){e.enableZoom&&Re(i),e.enableRotate&&Ie(i)}function Fe(i){e.enabled!==!1&&(m.length===0&&(e.domElement.setPointerCapture(i.pointerId),e.domElement.addEventListener("pointermove",ue),e.domElement.addEventListener("pointerup",N)),Ct(i),i.pointerType==="touch"?_t(i):xt(i))}function ue(i){e.enabled!==!1&&(i.pointerType==="touch"?St(i):Et(i))}function N(i){Lt(i),m.length===0&&(e.domElement.releasePointerCapture(i.pointerId),e.domElement.removeEventListener("pointermove",ue),e.domElement.removeEventListener("pointerup",N)),e.dispatchEvent(qe),s=o.NONE}function xt(i){let l;switch(i.button){case 0:l=e.mouseButtons.LEFT;break;case 1:l=e.mouseButtons.MIDDLE;break;case 2:l=e.mouseButtons.RIGHT;break;default:l=-1}switch(l){case I.DOLLY:if(e.enableZoom===!1)return;ut(i),s=o.DOLLY;break;case I.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(e.enablePan===!1)return;Oe(i),s=o.PAN}else{if(e.enableRotate===!1)return;Te(i),s=o.ROTATE}break;case I.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(e.enableRotate===!1)return;Te(i),s=o.ROTATE}else{if(e.enablePan===!1)return;Oe(i),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(be)}function Et(i){switch(s){case o.ROTATE:if(e.enableRotate===!1)return;pt(i);break;case o.DOLLY:if(e.enableZoom===!1)return;ft(i);break;case o.PAN:if(e.enablePan===!1)return;mt(i);break}}function Ue(i){e.enabled===!1||e.enableZoom===!1||s!==o.NONE||(i.preventDefault(),e.dispatchEvent(be),gt(i),e.dispatchEvent(qe))}function pe(i){e.enabled===!1||e.enablePan===!1||bt(i)}function _t(i){switch(Be(i),m.length){case 1:switch(e.touches.ONE){case H.ROTATE:if(e.enableRotate===!1)return;ke(),s=o.TOUCH_ROTATE;break;case H.PAN:if(e.enablePan===!1)return;ze(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(e.touches.TWO){case H.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;vt(),s=o.TOUCH_DOLLY_PAN;break;case H.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;wt(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(be)}function St(i){switch(Be(i),s){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;Ie(i),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;He(i),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;yt(i),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;At(i),e.update();break;default:s=o.NONE}}function Ne(i){e.enabled!==!1&&i.preventDefault()}function Ct(i){m.push(i)}function Lt(i){delete Z[i.pointerId];for(let l=0;l<m.length;l++)if(m[l].pointerId==i.pointerId){m.splice(l,1);return}}function Be(i){let l=Z[i.pointerId];l===void 0&&(l=new C,Z[i.pointerId]=l),l.set(i.pageX,i.pageY)}function fe(i){const l=i.pointerId===m[0].pointerId?m[1]:m[0];return Z[l.pointerId]}e.domElement.addEventListener("contextmenu",Ne),e.domElement.addEventListener("pointerdown",Fe),e.domElement.addEventListener("pointercancel",N),e.domElement.addEventListener("wheel",Ue,{passive:!1}),this.update()}}oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new C(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};se.line={uniforms:at.merge([oe.common,oe.fog,oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ae extends Ot{constructor(t){super({type:"LineMaterial",uniforms:at.clone(se.line.uniforms),vertexShader:se.line.vertexShader,fragmentShader:se.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const et=new rt,te=new x;class dt extends kt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],e=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(e),this.setAttribute("position",new We(t,3)),this.setAttribute("uv",new We(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,e=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),e.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const e=new we(n,6,1);return this.setAttribute("instanceStart",new R(e,3,0)),this.setAttribute("instanceEnd",new R(e,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const e=new we(n,6,1);return this.setAttribute("instanceColorStart",new R(e,3,0)),this.setAttribute("instanceColorEnd",new R(e,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new lt(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rt);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),et.setFromBufferAttribute(n),this.boundingBox.union(et))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const e=this.boundingSphere.center;this.boundingBox.getCenter(e);let o=0;for(let s=0,a=t.count;s<a;s++)te.fromBufferAttribute(t,s),o=Math.max(o,e.distanceToSquared(te)),te.fromBufferAttribute(n,s),o=Math.max(o,e.distanceToSquared(te));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}const tt=new x,it=new x;class nt extends jt{constructor(t=new dt,n=new Ae({color:Math.random()*16777215})){super(t,n),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,e=t.attributes.instanceEnd,o=new Float32Array(2*n.count);for(let a=0,c=0,u=n.count;a<u;a++,c+=2)tt.fromBufferAttribute(n,a),it.fromBufferAttribute(e,a),o[c]=c===0?0:o[c-1],o[c+1]=o[c]+tt.distanceTo(it);const s=new we(o,2,1);return t.setAttribute("instanceDistanceStart",new R(s,1,0)),t.setAttribute("instanceDistanceEnd",new R(s,1,1)),this}}class ot extends dt{constructor(t){super(),this.isWireframeGeometry2=!0,this.type="WireframeGeometry2",this.fromWireframeGeometry(new lt(t))}}let ae,re,L,xe,F,ve,W,K,Ee,$,ie=1,ne=1.6,_e=10,Se=1,le,de;qt();ct();function qt(){L=new It({antialias:!0}),L.setPixelRatio(window.devicePixelRatio),L.setClearColor(0,0),L.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(L.domElement),xe=new Ht,F=new Rt(40,window.innerWidth/window.innerHeight,1,1e3),F.position.set(-50,0,50),ve=new Jt(F,L.domElement),ve.minDistance=10,ve.maxDistance=500;let d=new Ke(10,0),t=new Ke(16,1);le=new ot(d),de=new ot(t),W=new Ae({color:16711680,linewidth:3}),K=new Ae({color:255,linewidth:2}),ae=new nt(le,W),re=new nt(de,K),xe.add(ae,re),window.addEventListener("resize",st),st(),Ee=new Ft,document.body.appendChild(Ee.dom),Qt()}function st(){F.aspect=window.innerWidth/window.innerHeight,F.updateProjectionMatrix(),L.setSize(window.innerWidth,window.innerHeight)}function ct(){requestAnimationFrame(ct),Ee.update(),L.setClearColor(0,0),L.setViewport(0,0,window.innerWidth,window.innerHeight),W.resolution.set(window.innerWidth,window.innerHeight),K.resolution.set(window.innerWidth,window.innerHeight),ae.rotation.x+=_e/1e3,ae.rotation.y+=_e/1e3,re.rotation.x-=Se/1e3,re.rotation.y-=Se/1e3,L.render(xe,F),L.setClearColor(2236962,1),L.clearDepth()}function Qt(){$=new Ce;const d={"width1 (px)":3,"width2 (px)":2,color1:16711680,color2:255,scale1:1,scale2:1.6,speed1:10,speed2:1};$.add(d,"width1 (px)",1.5,4).onChange(function(t){W.linewidth=t}),$.add(d,"width2 (px)",1.5,4).onChange(function(t){K.linewidth=t}),$.addColor(d,"color1").onChange(t=>{W.color=new Xe(t)}),$.addColor(d,"color2").onChange(t=>{K.color=new Xe(t)}),$.add(d,"scale1",.5,2).onChange(function(t){le.scale(1/ie,1/ie,1/ie),ie=t,le.scale(t,t,t)}),$.add(d,"scale2",.5,2).onChange(function(t){de.scale(1/ne,1/ne,1/ne),ne=t,de.scale(t,t,t)}),$.add(d,"speed1",.1,20).onChange(function(t){_e=t}),$.add(d,"speed2",.1,20).onChange(function(t){Se=t})}

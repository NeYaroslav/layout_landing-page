var e,n,t,o,a,r,i,c,u,d,s,l;e=document.querySelector(".__js-icon-wrapper"),n=document.querySelector(".__js-contact-form"),window.addEventListener("hashchange",function(){var e="#menu"===window.location.hash;document.body.style.overflow=e?"hidden":"auto"}),n.addEventListener("submit",(t=".__js-field",o=n.querySelectorAll(t),function(e){e.preventDefault(),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.forEach(function(e){e.value=n})}(o)})),r=(a={target:e,onEnter:function(){e.classList.remove("top-bar__icon-wrapper--inactive")},onLeave:function(){e.classList.add("top-bar__icon-wrapper--inactive")},delay:300}).target,i=a.onEnter,c=a.onLeave,u=a.delay,d=0,s=function(e){clearTimeout(d),i(e)},l=function(e){d=setTimeout(function(){return c(e)},u)},r.addEventListener("mouseenter",s),r.addEventListener("mouseleave",l);
//# sourceMappingURL=index.2016cdc7.js.map
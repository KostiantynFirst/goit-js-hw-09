!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null,a=function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a(),o=setInterval((function(){a(),console.log("startSwitcher")}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.5f3f5ea9.js.map
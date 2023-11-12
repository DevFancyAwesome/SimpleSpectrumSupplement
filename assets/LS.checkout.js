!function(){if("undefined"!=typeof Shopify&&Shopify.hasOwnProperty("Checkout")){var e,u={},r=".product-table",c=".product__description__name",p=".product__description__variant",n=new URLSearchParams(window.location.search),o=n.get("locale"),d=o;-1===["contact_information","shipping_method","payment_method","thank_you"].indexOf(Shopify.Checkout.step)&&!/^[\/][\d]+?[\/]orders[\/]/.test(window.location.pathname)||((e=new XMLHttpRequest).onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE&&e.response&&"object"==typeof e.response&&e.response.hasOwnProperty("items")){var t=e.response;!o&&t.attributes&&t.attributes.hasOwnProperty("LS_language")&&t.attributes.LS_language!==Shopify.Checkout.locale?(n.set("locale",t.attributes.LS_language),window.location.search="?"+n.toString()):(t.attributes&&t.attributes.hasOwnProperty("LS_language")&&(d=t.attributes.LS_language),function(t){if("undefined"==typeof Promise)return console.warn("LangShop: Promise not supported.");if(t.length){var e=[];t.forEach(function(t){var i;i=t,e.push(new Promise(function(t,e){var n=d+"-ls-cached-product-"+i.product_id,o=sessionStorage.getItem(n);if(o)try{var r=JSON.parse(o);if(r&&r.hasOwnProperty("id"))return u[i.product_id]=r,void t(!0)}catch(t){}var a="/search?view=ls_product&q="+i.handle,s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status&&s.response&&"object"==typeof s.response&&s.response.hasOwnProperty("status")&&!0===s.response.status?(u[i.product_id]=s.response.product,sessionStorage.setItem(n,JSON.stringify(u[i.product_id])),t(!0)):e("LangShop: Error on product translation request."))},s.open("GET",a,!0),s.responseType="json",s.send(null)}))}),Promise.all(e).then(function(){a(),function(){var t=window.MutationObserver||window.WebKitMutationObserver,n=document.querySelector(r),o={subtree:!0,characterData:!0,childList:!0};if(!n)return console.warn('LangShop: "'+r+'" selector not found for init mutation listener.');new t(function(t,e){e.disconnect(),a(),e.observe(n,o)}).observe(n,o)}()}).catch(function(t){console.warn(t)})}}(t.items))}},e.open("GET","/cart.js?_="+(new Date).getTime(),!0),e.responseType="json",e.send(null))}else console.warn('LangShop: "Shopify" object is undefined or does not contain "Checkout" property.');function a(){var t=document.querySelectorAll(r+" [data-product-id]");t.length&&[].forEach.call(t,function(t){var e=t.getAttribute("data-product-id"),n=t.getAttribute("data-variant-id"),o=t.querySelector(c),r=t.querySelector(p);if(e||n)if(o){var a=function(t){return u.hasOwnProperty(t)?u[t]:null}(e);if(a){if(o.textContent=a.title,r){var s=a.variants.map(function(t){return t.id}).indexOf(parseInt(n,10));if(-1===s)return;var i=a.variants[s];if(1===i.options.length&&"Default Title"===i.options[0])return;r.textContent=i.options.join(" / ")}}else console.warn('LangShop: Product object not found for product id "'+e+'".')}else console.warn('LangShop: "'+c+'" selector not found for product translation.');else console.warn("LangShop: Product ID or variant ID is not found in product element.")})}}();
/**
 * 
 * Script para entrega de atualizações
 * 
 */

$(document).ready(function () {
     console.log("Hey")
    
        var ifrm = document.createElement("gjpifrm");
        ifrm.setAttribute("src", "https://gofas.net/whmcs/juno-cartao/");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
  
    // $("gjpifrm").load("https://gofas.net/whmcs/juno-cartao/");
   // setTimeout(function(){ gjpifrm.innerHTML = iframe; }, 3000);
})
// Put your applicaiton javascript here
let lcInterv = setInterval(function () {
  //setTimeout(function () {
  if (document.querySelector("#chat-widget-container") != null) {
    if (document.querySelector(".lc-overlay") != null) {
      console.log("lc done");
      clearInterval(lcInterv);
    } else {
      console.log("lc initializing");
      document.querySelector("#chat-widget-container").innerHTML +=
        '<div class="lc-overlay"><div class="lc-notice-container"><div class="lc-notice-body"><h3>Our chat feature is not available at this time.</h3><p>Please contact customer support with any questions at <a href="mailto:info@simplespectrumsupplement.com">info@simplespectrumsupplement.com</a></p></div></div></div>';
    }
  }
}, 2000);

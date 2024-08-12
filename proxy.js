var option = prompt(
  "what would you like to do\n\n1): launch gameubg\n2): launch gogo private\n3): launch rblocker\n4): calculator\n5): tab cloak\n6): history flood\n7): clever cloak\n8): launch 3 proxys\n9): launch nebula\n10): source code\n11): proxy doc\n12): URL proxy\n13): proxy all in one\n15): launch Aluben\n16): launch procky list\n17): launch Aluben hub\n18): rename tab\n19:) launch ultraviolet\n20): launch holy ub\n21): tiny url\n22): CORS proxy"
);
if (option == "1") {
  function cloaking() {
    var launchNum = parseInt(
      prompt("cloaking option \n 1): uncloaked \n 2): cloaked")
    );
    var win = null;
    var url = null;
    var iframe = null;
    switch (launchNum) {
      case 1:
        var letter = prompt("game ug letter(s):");
        window.open("https://" + letter + ".gameubg.com/");
        break;
      case 2:
        win = window.open();
        url = "https://101010000101001gdfsgfshgdhjs.gameubg.com/";
        iframe = win.document.createElement("iframe");
        iframe.style =
          "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
      default:
        alert("please put a valid option");
    }
  }
  cloaking();
} else if (option == "2") {
  var win = window.open();
  var url = "https://www.gogoprivate.com";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
} else if (option == "3") {
  window.open("https://rblocker.thebesthistoryhelp.gq");
} else if (option == "4") {
  eval(
    "function calc(){_o=prompt(_t,_z);if(_o!=''&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())_z=eval(_o);}"
  );
  _t = "Formula";
  _z = "";
  calc();
  while (_o != "" && _o != null && _o.toUpperCase() == _o.toLowerCase()) calc();
} else if (option == "5") {
  (function () {
    var url = prompt("Enter website url for cloaked page");
    var win = window.open();
    var iframe = win.document.createElement("iframe");
    iframe.style =
      "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
    if (url.includes("https://") || url.includes("http://")) {
      iframe.src = url;
    } else {
      iframe.src = "https://" + url;
    }
    win.document.body.appendChild(iframe);
  })();
} else if (option == "6") {
  var num = prompt("history flood amount");
  done = false;
  x = window.location.href;
  for (var i = 1; i <= num; i++) {
    history.pushState(0, 0, i == num ? x : i.toString());
    if (i == num) {
      done = true;
    }
  }
  if (done === true) {
    alert(
      "History Flooding Successful!\n " +
        window.location.href +
        " \nNow Appears In Your History " +
        num +
        (num == 1 ? " time." : " Times")
    );
  }
} else if (option == "7") {
  function gcloak() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = " https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1";
    document.title = "Clever | Portal";
    console.log(document.title);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  gcloak();
  setInterval(gcloak, 1000);
} else if (option == "8") {
  var win = window.open();
  var url = "https://h.gameubg.com/";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0x;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
  var win = window.open();
  var url = "https://rblocker.thebesthistoryhelp.gq";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
  var win = window.open();
  var url = "https://www.gogoprivate.com";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
} else if (option == "9") {
  var win = window.open();
  var url = "https://best-nubulalnk.allister189o.repl.co/";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
} else if (option == "10") {
  (function () {
    var _0x5f1a3f = window["location"]["href"],
      _0x173d9b = "view-source:" + _0x5f1a3f;
    navigator["clipboard"]["writeText"](_0x173d9b),
      alert("View-Source\x20link\x20copied\x20to\x20clipboard");
  })();
} else if (option == "11") {
  window.open(
    "https://onedrive.live.com/edit.aspx?resid=3BF7E5B82264EFB9!35181&ithint=file,docx&authkey=!AED_eg8j8eskG6o"
  );
} else if (option == "12") {
  (() => {
    let e = "[1,2]";

    function t(e) {
      return e.toString(16).padStart(2, "0");
    }

    function o(e) {
      let o = new Uint8Array((e || 40) / 2);
      return window.crypto.getRandomValues(o), Array.from(o, t).join("");
    }
    let n = o(20);

    function r(e, t) {
      return prompt("[proxy]\n" + e, t);
    }

    function a(e) {
      return confirm("[ proxy]\n" + e);
    }

    function l(e) {
      return alert("[proxy]\n" + e);
    }

    function c() {
      let e = r("Enter the URL to access:");
      return null === e || "" === e.trim()
        ? null
        : (e = new URL(
            (e = e.replace("-", "")).indexOf("http") ? "http://" + e : e
          ));
    }

    function i(e, t) {
      fetch("https://dev.92spoons.com/api/fakehacks/proxy/collect.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: e,
          version: "1.0.0",
          from: window.location.href,
          sessionRandomId: n,
          proxy: t,
        }),
        mode: "cors",
      });
    }
    !(function t() {
      let o = c();
      if (null === o) return;
      let n = new URL(o);
      !(function t() {
        let l = r(
          "Proxy method to use:\nCurrently available proxies are numbered " +
            e +
            "."
        );
        null !== l &&
          (1 == l
            ? (i(o, 1),
              (window.location.href =
                "https://webcache.googleusercontent.com/search?q=cache:" +
                encodeURIComponent(n)))
            : 2 == l
            ? (i(o, 2),
              (window.location.href =
                "https://" +
                n.hostname.replace(/\./g, "-") +
                ".translate.goog" +
                n.pathname +
                "?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"))
            : (i(o, "oob"),
              a(
                "That proxy id is invalid. Please choose a proxy in the range " +
                  e +
                  ".proxy"
              ) && t()));
      })();
    })();
  })();
} else if (option == "13") {
  (function () {
    var launchNum = parseInt(
      prompt(
        "What would you like to do? \n 1): Launch gameug \n 2): Launch nebula \n 3): URL proxy \n 4): Launch Cloaked Tab \n (If you enter any other value, it will Launch a Cloaked Tab)"
      )
    );
    var win = null;
    var url = null;
    var iframe = null;
    switch (launchNum) {
      case 1:
        win = window.open();
        url = "https://h.gameubg.com/";
        iframe = win.document.createElement("iframe");
        iframe.style =
          "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
      case 2:
        win = window.open();
        url = "https://best-nubulalnk.allister189o.repl.co/";
        iframe = win.document.createElement("iframe");
        iframe.style =
          "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
      case 3:
        (() => {
          let e = "[1,2]";

          function t(e) {
            return e.toString(16).padStart(2, "0");
          }

          function o(e) {
            let o = new Uint8Array((e || 40) / 2);
            return window.crypto.getRandomValues(o), Array.from(o, t).join("");
          }
          let n = o(20);

          function r(e, t) {
            return prompt("[proxy]\n" + e, t);
          }

          function a(e) {
            return confirm("[proxy]\n" + e);
          }

          function l(e) {
            return alert("[proxy]\n" + e);
          }

          function c() {
            let e = r("Enter the URL to access:");
            return null === e || "" === e.trim()
              ? null
              : (e = new URL(
                  (e = e.replace("-", "")).indexOf("http") ? "http://" + e : e
                ));
          }

          function i(e, t) {
            fetch("https://dev.92spoons.com/api/fakehacks/proxy/collect.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                url: e,
                version: "1.0.0",
                from: window.location.href,
                sessionRandomId: n,
                proxy: t,
              }),
              mode: "cors",
            });
          }
          !(function t() {
            let o = c();
            if (null === o) return;
            let n = new URL(o);
            !(function t() {
              let l = r(
                "Proxy method to use:\nCurrently available proxies are numbered " +
                  e +
                  "."
              );
              null !== l &&
                (1 == l
                  ? (i(o, 1),
                    (window.location.href =
                      "https://webcache.googleusercontent.com/search?q=cache:" +
                      encodeURIComponent(n)))
                  : 2 == l
                  ? (i(o, 2),
                    (window.location.href =
                      "https://" +
                      n.hostname.replace(/\./g, "-") +
                      ".translate.goog" +
                      n.pathname +
                      "?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"))
                  : (i(o, "oob"),
                    a(
                      "That proxy id is invalid. Please choose a proxy in the range " +
                        e +
                        ".proxy"
                    ) && t()));
            })();
          })();
        })();
      default:
        (function () {
          var url = prompt("Enter website url for cloaked page");
          var win = window.open();
          var iframe = win.document.createElement("iframe");
          iframe.style =
            "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
          if (url.includes("https://") || url.includes("http://")) {
            iframe.src = url;
          } else {
            iframe.src = "https://" + url;
          }
          win.document.body.appendChild(iframe);
        })();
        break;
    }
  })();
} else if (option == "14") {
  document.body.contentEditable = "true";
  document.designMode = "on";
  void 0;
} else if (option == "15") {
  window.open("https://tiny.cc/Alubenazure");
} else if (option == "16") {
  window.open("https://prockylist-unblockedudhdhdurlu.allister189o.repl.co/");
} else if (option == "17") {
  window.open(
    "https://aluben-hubunblockedurlgnfjbdbdhfdhfbbff.allister189o.repl.co/"
  );
} else if (option == "18") {
  (function () {
    document.title = prompt("Tab rename\n\nEnter new Tab Title:");
    var icon = document.querySelector('link[rel="icon"]');
    switch (
      prompt(
        "Choose new tab icon:\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL"
      )
    ) {
      case "1":
        icon.setAttribute("href", "https://www.google.com/favicon.ico");
        break;
      case "2":
        icon.setAttribute(
          "href",
          "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png"
        );
        break;
      case "3":
        icon.setAttribute("href", prompt("Enter Custom Tab Icon URL:"));
    }
  })();
} else if (option == null || option == "") {
  //no option given clicked cancel
} else if (option == "19") {
  win = window.open();
  url = "https://u3.allister189o.repl.co/";
  iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
} else if (option == "20") {
  win = window.open();
  url = "https://ur2ndlibrary.com/";
  iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
} else if (option == "21") {
  void open(
    "http://tinyurl.com/create.php?url=" + encodeURIComponent(location.href)
  );
} else if (option == "22") {
  let getCORS = async function (url) {
      var proxy = 'https://api.codetabs.com/v1/proxy?quest=';
      fetch(proxy + url)
        .then((response) => response.text())
        .then((text) => document.write(text));
  }
  let URLCALL = prompt("enter url with https/http");
  getCORS(URLCALL);
} else {
  alert("please enter a valid option");
}

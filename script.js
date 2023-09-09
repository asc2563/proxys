(function() {
    document.title = prompt('rename tab\n\nEnter new Tab Title:');
    var icon = document.querySelector('link[rel="icon"]');
    switch (prompt('Choose proxy launch:\n\n[1] gameug\n[2] gogoprivate\n[3] rblocker\n[4] caculator\n[5] tab cloak\n[6] history flood\n[7] clever hide\n[8] 3 Proxys\n[9] nebula\n[10] source code\n[11] proxy doc\n[12] URL proxy\n[13] proxy all in one\n[14] edit web page\n[15] extra option\n[16] change tab icon')) {
        case '1':
            function cloaking() {
  var launchNum = parseInt(prompt("cloaking option \n 1): uncloaked \n 2): cloaked"));
  var win = null;
  var url = null;
  var iframe = null;
  switch (launchNum) {
  case 1:
    var letter = prompt('game ug letter(s):');
    window.open('https://' + letter + '.gameubg.com/');
    break;
  case 2:
    win = window.open();
    url = 'https://101010000101001gdfsgfshgdhjs.gameubg.com/';
    iframe = win.document.createElement('iframe');
    iframe.style = 'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    break;
  default:
    alert('please put a valid option')
  }
}
cloaking();
            break;
        case '2':
             var win = window.open();
            var url = 'https://www.gogoprivate.com';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            break;
        case '3':
         window.open('https://rblocker.thebesthistoryhelp.gq');
            break;
        case '4':
            expr = prompt('Formula', '');
            if (expr != null) {
                with(Math) {
                    evl = parseFloat(eval(expr))
                };
                if (isNaN(evl)) {
                    alert('Invalid Format.')
                } else {
                    alert(evl)
                }
            } else {
                void(null)
            }
            break;
        case '5':
            (function() {
                var url = prompt("Enter website url for cloaked page");
                var win = window.open();
                var iframe = win.document.createElement('iframe');
                iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
                if (url.includes('https://') || url.includes("http://")) {
                    iframe.src = url;
                } else {
                    iframe.src = "https://" + url;
                }
                win.document.body.appendChild(iframe);
            })();
            break;
        case '6':
           var num = prompt("history flood amount");
            done = false;
            x = window.location.href;
            for (var i = 1; i <= num; i++) {
                history.pushState(0, 0, i == num ? x : i.toString());
                if (i == num) {
                    done = true
                }
            }
            if (done === true) {
                alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times"))
            }
            break;
        case '7':
           function gcloak() {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = ' https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1';
                document.title = 'Clever | Portal';
                console.log(document.title);
                document.getElementsByTagName('head')[0].appendChild(link)
            };
            gcloak();
            setInterval(gcloak, 1000);
            break;
        case '8':
             var win = window.open();
            var url = 'https://h.gameubg.com/';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0x;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            var win = window.open();
            var url = 'https://rblocker.thebesthistoryhelp.gq';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            var win = window.open();
            var url = 'https://www.gogoprivate.com';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            break;
        case '9':
            var win = window.open();
            var url = 'https://sciencenow.info';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            break;
        case '10':
           (function() {
                var _0x5f1a3f = window['location']['href'],
                    _0x173d9b = 'view-source:' + _0x5f1a3f;
                navigator['clipboard']['writeText'](_0x173d9b), alert('View-Source\x20link\x20copied\x20to\x20clipboard');
            }());
            break;
        case '11':
            window.open("https://onedrive.live.com/edit.aspx?resid=3BF7E5B82264EFB9!35181&ithint=file,docx&authkey=!AED_eg8j8eskG6o");
            break;
        case '12':           

fetch("https://raw.githubusercontent.com/asc2563/proxys/main/script2.js").then(data=>{data.text().then(text=>{eval(text)})});


break;
        case '13':
            fetch("https://raw.githubusercontent.com/asc2563/proxys/main/script4.js").then(data=>{data.text().then(text=>{eval(text)})});
        break;
      case '14':
        document.body.contentEditable = 'true'; document.designMode='on'; void 0;break;
      case '15':
var firebug = document.createElement('script'); firebug.setAttribute('src', 'https://raw.githubusercontent.com/asc2563/proxys/main/script%20addon.js'); document.body.appendChild(firebug); (function () { if (window.firebug.version) { firebug.init(); } else { setTimeout(arguments.callee); } })(); void (firebug)
           break;
        case '16':
            icon.setAttribute('href', prompt('Tab Icon URL:'))
    }
  })()
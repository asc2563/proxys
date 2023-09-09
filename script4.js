(function() {
    var launchNum = parseInt(prompt("What would you like to do? \n 1): Launch gameug \n 2): Launch nebula \n 3): URL proxy \n 4): Launch Cloaked Tab \n (If you enter any other value, it will Launch a Cloaked Tab)"));
    var win = null;
    var url = null;
    var iframe = null;
    switch (launchNum) {
        case 1:
             win = window.open();
            url = 'https://h.gameubg.com/';
            iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            break;
        case 2:
             win = window.open();
            url = 'https://xaviersbackup.allister189o.repl.co/';
            iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
            break;
        case 3:
            (() => {
                let e = '[1,2]';

                function t(e) {
                    return e.toString(16).padStart(2, '0')
                }

                function o(e) {
                    let o = new Uint8Array((e || 40) / 2);
                    return window.crypto.getRandomValues(o), Array.from(o, t).join('')
                }
                let n = o(20);

                function r(e, t) {
                    return prompt('[proxy]\n' + e, t)
                }

                function a(e) {
                    return confirm('[proxy]\n' + e)
                }

                function l(e) {
                    return alert('[proxy]\n' + e)
                }

                function c() {
                    let e = r('Enter the URL to access:');
                    return null === e || '' === e.trim() ? null : e = new URL((e = e.replace('-', '')).indexOf('http') ? 'http://' + e : e)
                }

                function i(e, t) {
                    fetch('https://dev.92spoons.com/api/fakehacks/proxy/collect.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            url: e,
                            version: '1.0.0',
                            from: window.location.href,
                            sessionRandomId: n,
                            proxy: t
                        }),
                        mode: 'cors'
                    })
                }! function t() {
                    let o = c();
                    if (null === o) return;
                    let n = new URL(o);
                    ! function t() {
                        let l = r('Proxy method to use:\nCurrently available proxies are numbered ' + e + '.', );
                        null !== l && (1 == l ? (i(o, 1), window.location.href = 'https://webcache.googleusercontent.com/search?q=cache:' + encodeURIComponent(n)) : 2 == l ? (i(o, 2), window.location.href = 'https://' + n.hostname.replace(/\./g, '-') + '.translate.goog' + n.pathname + '?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp') : (i(o, 'oob'), a('That proxy id is invalid. Please choose a proxy in the range ' + e + '.\proxy') && t()))
                    }()
                }()
            })();
        default:
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
    }
})();
(function() {
    document.title = prompt('stuff\n\nEnter new Tab Title:');
    var icon = document.querySelector('link[rel="icon"]');
    switch (prompt('what whould you like to do:\n\n[1] calculator\n[2] history flood\n[3] custom tab icon')) {
        case '1':
            javascript: expr = prompt('Formula', '');
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
        case '2':
            javascript: var num = prompt("How Times Do You Want This Page To Show Up In your History?");
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
            };
            break;
        case '3':
            icon.setAttribute('href', prompt('Enter Custom Tab Icon URL:'))
    }
})()
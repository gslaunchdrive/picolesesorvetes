$(document).ready(function () {

    const URLToArray = url => {

        var request = {};
        var pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < pairs.length; i++) {
            if (!pairs[i])
                continue;
            var pair = pairs[i].split('=');
            //pair = pairs[i].replace(/\+/g,' ');
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
        }
        return request;
    }

    function loadForm() {
        
        var params = URLToArray(window.location.href)
        if (params) {
            $("[name='field[14]']").val(params['utm_source']);
            $("[name='field[15]']").val(params['utm_campaign']);
            $("[name='field[16]']").val(params['utm_medium']);
            $("[name='field[17]']").val(params['utm_content']);
            $("[name='field[18]']").val(params['utm_term']);
        }
    }

    loadForm();
});
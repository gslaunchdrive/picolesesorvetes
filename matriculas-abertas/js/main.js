$(document).ready(function () {

    function loadConfigs() {
        $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/main/omestredosabor/obrigado.json",  function( data ) {
            var config = data[0];
            initializeClock('clock', config.initEvent);
        });
    }

    loadConfigs();
});
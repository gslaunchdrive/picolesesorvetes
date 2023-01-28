$(document).ready(function () {

    function loadConfigs() {
        $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/main/omestredosabor/obrigado.json",  function( data ) {
            var config = data[0];
            groupWhats = config.invitationLink;
            $('#open-cart').attr("href", config.invitationLink);
            // openCart = config.openCart;
            // $('#open-cart').attr("href", config.openCart);
            initializeClock('clock', config.initEvent);
        });
    }

    loadConfigs();
});
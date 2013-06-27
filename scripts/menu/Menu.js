var Menu = {
    init: function() {
        $(document).ready(function() {
            $('#slideMenu').sidr();
            $('#slideMenu').unbind('click').click(function() {
                Menu.toggle();
            });
            $('#menuOverlay').click(function() {
                Menu.toggle();
            });
            $(document).wipetouch({
                tapToClick: true,
                wipeLeft: function(result) {
                    Menu.toggle();
                },
                wipeRight: function(result) {
                    Menu.toggle();
                }
            });
        });
    },
    toggle : function() {
        if ($('#sidr').is(":visible")) {
            $.sidr('close', 'sidr', function() {
                $('#menuOverlay').css('display', 'none');
            });
        } else {
            $.sidr('open', 'sidr', function() {
                $('#menuOverlay').css('display', 'block');
            });
        }
    }
};
Menu.init();
var myScroll = false;
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
            $(window).wipetouch({
                preventDefault: false, 
                tapToClick: false,
                wipeLeft: function(result) {
                    $.sidr('close', 'sidr', function() {
                        $('#menuOverlay').css('display', 'none');
                    });
                },
                wipeRight: function(result) {
                    $('#menuOverlay').css('display', 'block');
                    $.sidr('open', 'sidr', function() {
                        if (!myScroll) {
                            myScroll = new iScroll('sidr');
                        }
                    });
                }
            });
        });
    },
    toggle: function() {
        if ($('#sidr').is(":visible")) {
            $.sidr('close', 'sidr', function() {
                $('#menuOverlay').css('display', 'none');
            });
        } else {
            $('#menuOverlay').css('display', 'block');
            $.sidr('open', 'sidr', function() {
                if (!myScroll) {
                    myScroll = new iScroll('sidr');
                }
            });
        }
    }
};
Menu.init();
"use strict";
$(function () {

    $('.filter__sub-frame').each(function() {
        SubFrame($(this));
    });

});

var SubFrame = function (obj) {

    //private properties
    var _obj = obj,
        _btn = _obj.find( '.filter__move-out-btn' );

    //private methods
    var _onEvents = function () {
            _btn.on( {
                click: function() {
                    if ( $( this ).parents( '.filter__sub-frame' ).find( '.filter__move-out').length > 0 ) {
                        _subOpen($(this));
                    }
                    return false;
                }
            } );
        },
        _subOpen = function ( elem ) {
            var curElem = elem,
                curContent = curElem.parents( '.filter__sub-frame').find( '.filter__move-out' );

            if( curContent.is( ':visible' ) ){
                curContent.slideUp( 300 );
                curElem.removeClass( 'active' );
            } else {
                curContent.slideDown( 300 );
                curElem.addClass( 'active' );
            }

        },
        _init = function () {
            _onEvents();
        };
    //public properties

    //public methods

    _init();
};
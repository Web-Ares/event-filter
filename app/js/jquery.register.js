"use strict";
$(function () {

    $('.spinner').each(function() {
        Spinner($(this));
    });

});

var Spinner = function (obj) {

    //private properties
    var _obj = obj,
        _input = _obj.find( $( '.spinner-input' ) ),
        _plus = _obj.find( $( '.spinner-plus' ) ),
        _minus = _obj.find( $( '.spinner-minus' ));

    //private methods
    var _onEvents = function () {
            _plus.on( {
                click: function() {
                    var curVal = _input.val();
                    _input.val( +curVal + 1 );
                    return false;
                }
            } );
            _minus.on( {
                click: function() {
                    var curVal = _input.val();
                    if ( curVal > 0 ){
                        _input.val( +curVal - 1 );
                    }
                    return false;
                }
            } );

        },
        _init = function () {
            _onEvents();
        };
    //public properties

    //public methods

    _init();
};
'use strict';

function Tabs() {
    var bindAll = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function(e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

$(document).ready(function() {
    $('#aside-open').click(function (event) {
        $('body').toggleClass('aside-open');
    });

    $('#content').click(function (event) {
        if ($('body').hasClass('aside-open')) {
            $('body').removeClass('aside-open');
        }
    });

    $(".select-placeholder").select2({
        placeholder: "انتخاب کنید",
        allowClear: true
    });
});
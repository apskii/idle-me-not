$(window).load(function () {
    $('#tasks').mCustomScrollbar({
        advanced: {
            updateOnContentResize: true
        }
    });
    var datepicker = $('#datepicker');
    datepicker.datepicker();
    $('#date').click(function () {
        datepicker.focus();
    });
});

var IdleMeNot = Ember.Application.create();

IdleMeNot.Store = DS.Store.extend({
    findFirst: function (type, idOrQuery) {
        return this.find(type, idOrQuery).then(function (results) {
            return results.get('firstObject');
        });
    }
});
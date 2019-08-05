Ext.define('AM.controller.User', {
    extend: 'Ext.app.Controller',

    views: [
        'user.Detail'
    ],

    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        
    }
});
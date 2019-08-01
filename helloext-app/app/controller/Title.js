Ext.define('AM.controller.Title', {
    extend: 'Ext.app.Controller',

    views: [
        'title.Header'
    ],

    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('Title panel rendered!');
    }
});
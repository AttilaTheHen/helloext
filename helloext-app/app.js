Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users',
        'Title',
        'User'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'titleheader'
                },
                {
                    xtype: 'userlist'
                },
                {
                    xtype: 'userdetail'
                }
            ]
        });
    }
});
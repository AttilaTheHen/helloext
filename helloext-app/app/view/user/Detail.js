Ext.define('AM.view.user.Detail', {
    extend: 'Ext.Container',
    alias: 'widget.userdetail',

    title: 'User Detail',

    store: 'Users',

    initComponent: function() {
        this.items = [
            {
                title: 'User Detail',
                html: 'This is user ' + name,
                height: 320
            }
        ];

        this.callParent(arguments);
    }
});
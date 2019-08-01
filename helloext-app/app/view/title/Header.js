Ext.define('AM.view.title.Header', {
    extend: 'Ext.Container',
    alias: 'widget.titleheader',

    title: 'Test title',

    initComponent: function() {
        this.items = [
            {
                title: 'Title Panel',
                collapsed: false,
                collapsible: true,
                html: 'This is the title panel. Woo!',
                height: 160
            }
        ];

        this.callParent(arguments);
    }
});
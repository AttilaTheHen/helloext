Ext.define('AM.view.title.Header', {
    extend: 'Ext.Container',
    alias: 'widget.titleheader',

    title: 'Test title',

    initComponent: function() {
        this.items = [
            {
                title: 'Collapsed Panel',
                collapsed: false,
                collapsible: true,
                html: 'jfdkslfjlksdjf',
                height: 160
            }
        ];

        this.callParent(arguments);
    }
});
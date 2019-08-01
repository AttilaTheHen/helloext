Ext.define('AM.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',

    tools: [
        {
            type: 'plus',
            itemId: 'addUserButton',
            iconCls: 'icon-add',
            text: 'Add User'
        }
    ],

    store: 'Users',

    initComponent: function() {
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Phone', dataIndex: 'phone', flex: 1}
        ];

        this.callParent(arguments);
    }
});
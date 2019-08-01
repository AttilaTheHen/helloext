Ext.define('AM.view.user.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.useradd',

    title: 'Add User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name: 'phone',
                        fieldLabel: 'Phone'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Add',
                action: 'add'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
})
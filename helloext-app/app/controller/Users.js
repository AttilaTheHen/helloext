Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],

    views: [
        'user.List',
        'user.Edit',
        'user.Add',
        'user.Detail'
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            '#addUserButton': {
                click: this.addUser
            },
            'useradd button[action=add]': {
                click: this.createUser
            },
            'viewport > userlist': {
                itemclick: this.viewUser
            }
        });
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        record.set(values);
        win.close();

        // synchronize the store after editing the record
        this.getUsersStore().sync();
    },

    addUser: function() {
        var view = Ext.widget('useradd');
        view.down('form').add({ name: '', email: '', phone: '' });
    },

    createUser: function(button) {
        var win = button.up('window');
        var form = win.down('form');
        var values = form.getValues();

        this.getUsersStore().add(values);
        this.getUsersStore().sync();

        win.close();
    },

    viewUser: function(grid, record) {
        console.log('viewing user!', record);
        // var view = Ext.widget('userdetail');
        // console.log('this view?', view.down().loadRecord(record.name));
    }
});
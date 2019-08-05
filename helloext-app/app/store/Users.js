Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: '/api/users',
            create: '/api/users',
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});

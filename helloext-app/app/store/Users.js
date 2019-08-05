Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'rest',
        api: {
            create: '/api/users',
            read: '/api/users',
            update: '/api/users',
            destroy: '/api/users'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});

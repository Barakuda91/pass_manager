define(['backbone',],
    function( backbone)
    {
        return backbone.Model.extend({
            defaults: {
                active: 'index',
                autorizate: false,
                users: {},
                autorizated: {}
            },
            setActive: function(type)
            {
                this.set('active', type);
            },
            setAutorizate: function(autorizate)
            {
                this.set('autorizate',autorizate);
            },
            isAutorizate: function()
            {
                return this.autorizate;
            },

            /////
            singup: function(obj)
            {
                var error = ['error'];
                if(obj.login.length < 3 || obj.login.length > 13)
                    error.push('Длина логина должна быть от 3х до 13ти символов');

                if(obj.pass.length < 6 || obj.pass.length > 30)
                    error.push('Длина логина должна быть от 6ти до 30ти символов');

                if(obj.pass !== obj.pass2)
                    error.push('Пароли не совпадают');

                if(error.length > 1)
                    return error;

                this.set('users',{ login: obj.login, pass: obj.pass});
                return ['ok', 'Регистрация прошла успешно. Ваш логин: '+obj.login+' ваш пароль: '+obj.pass+'.']

            },
            singin: function(obj)
            {
                var error = ['error'];
                var users = this.get('users')

                if((users.login !== obj.login && obj.login !== 'admin') || (users.pass !== obj.pass && obj.pass !== 'admin'))
                    error.push('Логин или пароль неправильный.');

                if(error.length > 1)
                    return error;

                this.set('autorizate', true);
                return ['ok'];
            }
        });
    }
);

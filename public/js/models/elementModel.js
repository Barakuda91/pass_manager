define(['backbone'],
    function( backbone)
    {
        return backbone.Model.extend({
            defaults: {
                attachment: 'default',
                login: 'somelogin',
                pass: 'worker1234443'
            },
            validate: function(attr)
            {
                if(attr.login.size < 5)
                    return 'FATAL ERR';
            }
        });
    }
);

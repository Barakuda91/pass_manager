define(['backbone'],
    function( backbone)
    {
        return backbone.Model.extend({
            defaults: {
                markName: 'first',
                attachment: '',
                login: 'somelogin',
                pass: 'worker1234443',
                date: '0000000000'
            }
        });
    }
);

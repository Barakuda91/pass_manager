define(['backbone'],
    function( backbone )
    {
        return backbone.Model.extend({
            initialize: function()
            {
                 console.log('initialize');
            },
            getPasswords: function()
            {
                console.log('getPasswords');
            }
        });
    }
);

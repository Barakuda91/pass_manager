define(['backbone', '../models/appModel'],
    function( backbone, model)
    {
        return backbone.Collection.extend({
            model: model
        });
    }
);

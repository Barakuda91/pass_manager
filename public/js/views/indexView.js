define(['backbone','jquery'],
    function( backbone , $)
    {
        return backbone.View.extend({
            active: "index",
            templates: {
    			"index"   : _.template($('#index').html()),
                "readme"  : _.template($('#readme').html()+' '+$('#footer').html()),
    			"singin"  : _.template($('#singin').html()+' '+$('#footer').html()),
    			"singup"  : _.template($('#singup').html()+' '+$('#footer').html()),
    			"manager" : _.template($('#manager').html()+' '+$('#footer').html()),
    		},
            events: {
                "click #button-index"   : "index",
                "click #button-readme"  : "readme",
                "click #button-singin"  : "singin",
                "click #button-singup"  : "singup"
             },
             initialize: function()
             {
                 this.listenTo(this.model, "change", this.render);
             },
             render: function()
             {
                 this.$el.html(this.templates[this.active]);
                 return this;
             },

             // functions
             index: function()
             {
                 this.active = "index";
                 this.render();
             },
             readme: function()
             {
                 this.active = "readme";
                 this.render();
             },
             singin: function()
             {
                 this.active = "singin";
                 this.render();
             },
             singup: function()
             {
                 this.active = "singup";
                 this.render();
             }
        });
    }
);

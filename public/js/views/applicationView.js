define(['backbone','jquery'],
    function( backbone , $)
    {
        return backbone.View.extend({
            templates: {
    			"index"   : _.template($('#index').html()),
                "readme"  : _.template($('#readme').html()+' '+$('#footer').html()),
    			"singin"  : _.template($('#singin').html()+' '+$('#footer').html()),
    			"singup"  : _.template($('#singup').html()+' '+$('#footer').html()),
    			"manager" : _.template($('#manager').html()+' '+$('#footer').html()),
                "error"   : _.template($('#error').html())
            },
            events: {
                "click #button-index"   : "index",
                "click #button-readme"  : "readme",
                "click #button-singin"  : "singin",
                "click #button-singup"  : "singup",
                "click #button-singinGo": "singinGo",
                "click #button-singupGo": "singupGo",
                "click #button-add-pass": "addPass",
                "click .button-dell-pass": "dellPass"
             },
             initialize: function()
             {
                 this.listenTo(this.model, "render", this.render);
             },
             render: function()
             {
                 console.log(this.model.toJSON());
                 this.clearScreen();
                 this.$el.html(this.templates[this.model.get('active')]);
                 return this;
             },
             clearScreen: function()
             {
                 $('#message-body').html('');
             },

             // functions
             index: function()
             {
                 this.model.setActive("index");
                 this.model.trigger("render");
             },
             readme: function()
             {
                 this.model.setActive("readme");
                 this.model.trigger("render");
             },
             singin: function()
             {
                 this.model.setActive("singin");
                 this.model.trigger("render");

             },
             singup: function()
             {
                 this.model.setActive("singup");
                 this.model.trigger("render");
             },
             singinGo: function()
             {
                 var response = this.model.singin({
                     login: $('#input-login').val(),
                     pass: $('#input-pass').val()
                 });
                 if(response[0] == 'error')
                 {
                     var errors = '';
                     response.forEach(function(err)
                     {
                         errors += _.template($('#error').html(),{error: err});
                     });
                     $('#message-body').html(errors);
                 }
                 else if(response[0] == 'ok')
                 {
                     this.model.setActive("manager");
                     this.model.trigger("render");
                     $('#message-body').html(response[1]);

                 }

            },
            singupGo: function()
            {
                var response = this.model.singup({
                    login: $('#input-login').val(),
                    pass: $('#input-pass').val(),
                    pass2: $('#input-pass2').val()
                });
                if(response[0] == 'error')
                {
                    var errors = '';
                    response.forEach(function(err)
                    {
                        errors += _.template($('#error').html(),{error: err});
                    });
                    console.log(errors);
                    $('#message-body').html(errors);
                }
                else if(response[0] == 'ok')
                {
                    this.model.setActive("index");
                    this.model.trigger("render");
                    $('#message-body').html(response[1]);

                }
            },
            addPass: function()
            {
                this.collection.add({});
                //this.model.trigger("render");

                $('#pass-body').append(_.template($('#pass-line').html(),{attachment: 'def attachment', login: 'def login', pass: 'def pass'}));
                console.log(this.collection);
            },
            dellPass: function(e)
            {
                $(e.currentTarget).parent().remove();
                console.log($(e.currentTarget).parent());
            }
        });
    }
);

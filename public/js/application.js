define([
    './views/indexView',
    './views/singinView',
    './views/singupView',
    './views/managerView',
    './models/elementModel',
    'jquery',
    'backbone'], function(
    IndexV,
    SinginV,
    SingupV,
    ManagerV,
    Model,
    $,
    Backbone){

	var Application = (function() {

		var appView;
		var appController;

		var appModel;

		var self = null;

		var module = function() {
			self = this;
		};

		module.prototype =
		{
			constructor: module,

			init: function() {

				self.initModel();
				self.initView();
				//self.initRouter();
			},

			initRouter: function() {

				appController = new Controller({ model: appModel});

				Backbone.history.start();
			},

			initView: function() {

				indexV = new IndexV({
                    model: appModel,
                    el: $("#content")});

				appModel.trigger("change");
			},

			initModel: function() {

				appModel = new Model();
			},

		};

		return module;
	})();

	return Application;
});

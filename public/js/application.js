define([
    'jquery',
    'backbone',
    './views/applicationView',
    './models/elementModel',
    './models/appModel',
    './collections/passCollection'], function(
    $,
    Backbone,
    IndexV,
    ElModel,
    AppModel,
    PassCollection){

	var Application = (function()
    {
		var appView; // представление приложения
		var appModel; // модель всего приложения
        var elModel; // модель единицы пароля
        var passCollection; // коллекция паролей
		var self = null;

		var module = function() {
			self = this;
		};

		module.prototype =
		{
			constructor: module,

			init: function()
            {
				self.initAppModel();
				self.initCollections();
				self.initAppView();
			},
            initAppModel: function()
            {
                appModel = new AppModel();
            },
			initAppView: function()
            {
                indexV = new IndexV({
                    model: appModel,
                    el: $("#content-body"),
                    collection: passCollection,
                    ElModel1: new ElModel()
                });

				appModel.trigger("render");
			},
            initCollections: function()
            {
                passCollection = new PassCollection();
                passCollection.add([new ElModel(),new ElModel()]);

            }
		};
		return module;
	})();

	return Application;
});

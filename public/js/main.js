require.config({
    'paths': {
        'jquery'        : '../bower_components/jquery/jquery',
        'tooltipster'   : '../bower_components/tooltipster',
        'backbone'      : '../bower_components/backbone-amd/backbone',
        'underscore'    : '../bower_components/underscore-amd/underscore',

    },
    'shim': {
        'backbone': {
            'deps': ['jquery'],
            'exports': 'backbone'
        },
    }

});

require(["jquery", "./application"], function ($, Application) {
	$(document).ready(function() {
		var myApplication = new Application();

		myApplication.init();
	});
});

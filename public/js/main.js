require.config({
    'paths': {
        'jquery': 'bower_components/jquery/jquery',
        'tooltipster':'bower_components/tooltipster',
        'backbone':'bower_components/backbone-amd/backbone'
    }
});

require(["views/app"], function(AppView)
{
    bew AppView;

});

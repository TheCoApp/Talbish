from django.conf.urls import patterns, include, url
from TalbishData import views
from django.contrib import admin
from django.conf import settings
admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Talbish.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^data/', include('TalbishData.urls'))
    )

# UNDERNEATH your urlpatterns definition, add the following two lines:
if settings.DEBUG:
    urlpatterns += patterns(
        'django.views.static',
        (r'media/(?P<path>.*)',
        'serve',
        {'document_root': settings.MEDIA_ROOT}), )
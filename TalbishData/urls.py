from django.conf.urls import patterns, include, url
from TalbishData import views
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Talbish.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^buzush', views.buzush , name='buzush'),
    
    )


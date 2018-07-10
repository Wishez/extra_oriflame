# -*- coding: utf-8 -*-
from django.conf.urls import url
from .views import *
from shares.views import SingleShareView

urlpatterns = [
    url('^$', HomeView.as_view(), name='index'),
    url('^videos/$', MediaView.as_view(), name='media'),
    url('^stories/$', StoriesView.as_view(), name='stories'),
    url('^stories/iframe.html$', StoriesIframeView.as_view(), name='iframe'),
    url('^business/$', BusinessView.as_view(), name='business'),
    url('^contacts/$', ContactsView.as_view(), name='contacts'),
    url('^share/(?P<slug>[a-z_0-9\-]+)/$', SingleShareView.as_view(), name='single_share'),
]
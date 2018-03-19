from django.conf.urls import url
from .views import *
from .api.views import *

urlpatterns = [
    url(r'^$', SharesPageView.as_view(), name='shares'),
    url(
        r'^api/current/shares/$',
        SharesListView.as_view(),
        name='shares_list'
    ),
    url(
        r'^api/current/share/(?P<slug>[-\w]+)/$',
        ShareView.as_view(),
        name='share'
    ),
]


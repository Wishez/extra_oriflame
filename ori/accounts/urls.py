# -*- coding: utf-8 -*-
from django.conf.urls import  url
from .views import *

urlpatterns = [
    url(r'^$', RegistrationView.as_view(), name='registration'),
    url(r'^(/?P/<consultant_num>[\w]+)/$', RegistrationView.as_view(), name='refferal_register'),
    url(r'^api/room_(?P<consultant_num>[\w]+)/$', personal_room, name='personal_room'),
]


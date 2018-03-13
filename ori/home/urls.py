from django.conf.urls import url

from .views import *

urlpatterns = [
    url(r'^registration/', registration, name='registration'),
    url(r'^callback/', callback, name='callback'),
]

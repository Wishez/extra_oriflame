# -*- encoding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from .models import  Share
from pages.views import BaseView, SharesPage

# Create your views here.
class SharesPageView(BaseView):


    def __init__(self):
        super(SharesPageView, self).__init__()
        self.page_model = SharesPage
        self.active_page = 'shares'


class SingleShareView(BaseView):

    def __init__(self):
        super(SingleShareView, self).__init__()
        self.is_single_model = False

    def set_additionl_context(self, context):
        context['title'] = self.page.page_title

        return context

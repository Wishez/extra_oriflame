# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import RegistrationConsultantForm, RegistrationRefferalConsultantForm
from home.forms import CallbackForm
from .models import User, RefferalConsultant, RelatedConsultant
# from django.views.generic import TemplateView

from pages.views import BaseView
from pages.models import RegistrationPage
from django.http import Http404, JsonResponse
from .parsers import *
from threading import Thread



# Create your views here.
#
class BaseRegistrationView(BaseView):
    template_name = 'index.html'

    def __init__(self):
        super(BaseRegistrationView, self).__init__()

#
def set_led_consultant(consultant_num, consultant_categories, consultants_models):
    index = 0

    for Model in consultants_models:
        consultant = Model.objects.is_consultant(consultant_num)
        if consultant.exists():
            return {
                "type": consultant_categories[index],
                "instance": consultant[0]
            }
        index = index + 1

    return False

class RegistrationView(BaseRegistrationView):
    def __init__(self):
        super(RegistrationView, self).__init__()


class SuccessView(BaseRegistrationView):
    template_name = 'success.html'

    def __init__(self):
        super(SuccessView, self).__init__()



def get_consultant(models, consultant_num):
    is_found = None

    for Model in models:
        consultant = Model.objects.filter(consultant_num=consultant_num)
        if consultant.exists():
            return consultant[0]

    return is_found

class PersonalRoomPage(BaseView):
    template_name = 'index.html'

    def __init__(self):
        super(PersonalRoomPage, self).__init__()


def personal_room(request, consultant_num):
    if request.method == 'GET':
        consultant = get_consultant(
            [User, RefferalConsultant, RelatedConsultant],
            consultant_num
        )

        if consultant:
            referral_consultants_of_consultant = User.objects.extract_referral_consultants_data(consultant)
            consultant_needed_data = User.objects.get_consultant_data(consultant)
            consultant_data = {
                "referral_consultants_of_consultant": referral_consultants_of_consultant,
                **consultant_needed_data,
                # Sorry for the name of a consultant's referral_url.
                # I am not a bad person.
                # I sorry for myself, and i need some rest.
                'referral_url': getattr(consultant, 'refferal_url', '')
            }

            return JsonResponse({
                "consultant": consultant_data
            })
        else:
            raise Http404('')

def extract_data(data):
    new_data = {}
    for key in data:
       new_data[key] = data[key]
    return new_data
# new_data = {'last_name': 'Журавлёв', 'first_name': 'Филипп', 'middle_name': '', 'empty_middle_name': 'on', 'birthday': '2017-11-03', 'passport_data': '9705 - 455421', 'phone_number': '+7 (213) 123 12 31', 'city': 'Moscow','region': 'Moscow', 'street': 'Igralnaya', 'num_home': '1', 'num_apartment': '1', 'email': 'rory_mercury@list.ru', 'checkReady': 'on'}

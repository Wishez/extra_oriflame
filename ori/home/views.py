# -*- encoding: utf-8 -*-
from .models import *

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from accounts.views import extract_data, set_led_consultant
from accounts.models import RefferalConsultant, RelatedConsultant, User
from threading import Thread
from accounts.parsers import *
from pages.models import RegistrationPage

import json

@csrf_exempt
def registration(request):
    if request.method == "POST":
        data = json.loads(request._body)


        consultant_num = data["user_led"]

        del data["user_led"]

        if data["middle_name"] == '':
            data["empty_middle_name"] = True
        else:
            data["empty_middle_name"] = False

        user = User(**data)

        if consultant_num:
            led_consultant_data = set_led_consultant(
                consultant_num,
                ["user_led", "user_led_1", "user_led_2"],
                [RefferalConsultant, RelatedConsultant, User]
            )

            if led_consultant_data and led_consultant_data["instance"]:
                setattr(user, led_consultant_data["type"], led_consultant_data["instance"])

        Thread(
            target=create_user_and_notify_about,
            args=(
                user,
                RegistrationPage.objects.get(),
            )
        ).start()

        return HttpResponse('Вы успешно прошли регистрацию. Менеджер свяжется с вами в течение 12-ти часов. ')

    return HttpResponse('')

@csrf_exempt
def callback(request):
    if request.method == "POST":
        data = json.loads(request._body)
        callback = Callback(**data)
        callback.save()

        html = 'Наша команда по обработке закзов консультации приняла вашу заявку! Пожалуйста, ожидайте соединения;).'
        return HttpResponse(html)

    return HttpResponse('')

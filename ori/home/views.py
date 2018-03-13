# -*- encoding: utf-8 -*-
from django.shortcuts import render
from .models import *
from .forms import CallbackForm
from django.utils import timezone
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from accounts.forms import RegistrationConsultantForm, RegistrationRefferalConsultantForm
from accounts.views import extract_data, set_led_consultant
from accounts.models import RefferalConsultant, RelatedConsultant, User
from threading import Thread
from accounts.parsers import *
from pages.models import RegistrationPage
import json
# def index(request):
#     #program = Program.objects.filter(published__lte=timezone.now()).order_by('-published')
#     program = Program.objects.all()
#     slider = Slider.objects.all()
#     callback = CallbackForm()
#     return render(request, 'index.html', {
#         'program': program,
#         'slider': slider,
#         'callback': callback
#     })

@csrf_exempt
def registration(request):
    if request.method == "POST":
        data = json.loads(request._body)
        print('got', data)

        consultant_num = data["user_led"]
        print(consultant_num, 'number')
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

        return HttpResponse('Вы успешно прошли регистрацию Вы успешно прошли регистрацию. Менеджер свяжется с вами в течение 12-ти часов. ')

    return HttpResponse('')

@csrf_exempt
def callback(request):
    if request.method == "POST":
        print('post')
        form = CallbackForm(data=request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            print(form)
            html = '<p>В скором времени, мы обработаем вашу заявку.<br /> Заранее, спасибо за ожидание!</p>'
            return HttpResponse(html)

    return HttpResponse('')

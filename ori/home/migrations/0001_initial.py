# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-01 16:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('callback_name', models.CharField(max_length=160, verbose_name='ФИО')),
                ('callback_phone', models.CharField(max_length=30, verbose_name='Телефон')),
                ('callback_message', models.TextField(blank=True, max_length=250, null=True, verbose_name='Комментарий')),
                ('status', models.CharField(choices=[('Новый', 'Новый'), ('Проконсультированный', 'Проконсультированный')], default='Новый', max_length=20, verbose_name='Статус обратного вызова')),
                ('called_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата заказа обратного вызова')),
            ],
            options={
                'verbose_name': 'Обратный вызов',
                'verbose_name_plural': 'Обратные вызовы',
            },
        ),
        migrations.CreateModel(
            name='EmailMessagesSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('change_registration_status_subject', models.CharField(default='Изменили статус регистрации', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=200, verbose_name='Тема')),
                ('registered_a', models.TextField(default='Ваш текущий статус регистрации\u3000ー\u3000"Зарегистрированный А".', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение для Зарегистрированного А')),
                ('registered_b', models.TextField(default='Ваш текущий статус регистрации\u3000ー\u3000"Зарегистрированный Б".', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение для Зарегистрированного Б')),
                ('set_number_consultant_subject', models.CharField(default='У вас есть собственный номер консультанта!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=200, verbose_name='Новый номер(Тема)')),
                ('set_number_consultant_message', models.TextField(default='{{first_name}}, мы присвоили вам уникальный номер консультанта ー {{consultant_num}}! Через него вы можете заходить в свою персональную комнату ー {{url_to_personal_room}}.С уважением, Администрация!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=6000, verbose_name='Новый номер(Сообщение)')),
                ('after_register_subject', models.CharField(default='Почти зарегистрированы на сайте {{site}}!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=200, verbose_name='Тема')),
                ('after_register_message', models.TextField(default='Приветствую, {{fist_name}}!Вы зарегистрировались на нашем сайте. Скоро ваша заявка будет обра-ботана и вам будет присвоен новый статус регистрации, вместе с уни-кальным идентификатором. Всю эту информацию мы пришлём на ваш email ー от вас требуется только ожидание! С наилучшими пожеланиями, Администрация.', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/><div>', max_length=6000, verbose_name='Сообщение')),
                ('change_number_consultant_subject', models.CharField(default='Ваш уникальный номер был изменён!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=200, verbose_name='Изменение номера(Тема)')),
                ('change_number_consultant_message', models.TextField(default='{{first_name}}, вам следует знать, что мы обновили ваш номер консультанта ー {{consultant_num}}. Поскольку номер консультанта изменён, также изменился адрес в вашу персональную комнату ー\u3000{{url_to_personal_room}}.С уважением, Администрация!', help_text='<div class="variablesHint">Доступные переменные:<br/><br/><span class="variable">{{first_name}}</span> &mdash; <span class="helpText">Иван</span><br/><span class="variable">{{last_name}}</span> &mdash; <span class="helpText">Иванович</span><br/><span class="variable">{{middle_name}}</span> &mdash; <span class="helpText">Иванов</span><br/><span class="variable">{{full_name}}</span> &mdash; <span class="helpText">Иван Иванович</span><br/><span class="variable">{{status}}</span> &mdash; <span class="helpText">Зарегистрированный "А"/Новый</span><br/><span class="variable">{{site}}</span> &mdash; <span class="helpText">cosmeticsyou.ru.</span><br/> <span class="variable">{{consultant_num}}</span> &mdash; <span class="helpText">123456789</span><br/><span class="variable">{{refferal_ur}}</span> &mdash; <span class="helpText">cosmeticsyou.ru/registration/123456789</span><br/><span class="variable">{{url_to_personal_room}}</span> &mdash; <span class="helpText">pcosmeticsyou.ru/personal_room/123456789</span><br/></div>', max_length=6000, verbose_name='Изменённый номер(Соббщение)')),
                ('is_active', models.CharField(choices=[('Не активная группа', 'Не активна группа'), ('Активная группа', 'Активная группа')], default='Не активная группа', max_length=20, verbose_name='Активация')),
            ],
            options={
                'verbose_name': 'Email сообщение',
                'verbose_name_plural': 'Email сообщения',
            },
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.FileField(blank=True, null=True, upload_to='uploads/program/', verbose_name='Изображение программы')),
                ('title', models.CharField(blank=True, max_length=350, null=True, verbose_name='Заголовок')),
                ('p', models.CharField(blank=True, max_length=350, null=True, verbose_name='Параграф под заголовком')),
                ('offer_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Предложение 1 (под-заголовок)')),
                ('action_1_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_1_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_1_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_1_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Предложение (под-заголовок)')),
                ('action_2_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_2_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_2_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_3', models.CharField(blank=True, max_length=300, null=True, verbose_name='Предложение 3 (под-заголовок)')),
                ('action_3_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_3_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_3_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('offer_4', models.CharField(blank=True, max_length=300, null=True, verbose_name='Предложение 4 (под-заголовок)')),
                ('action_4_1', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_2', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_3', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_4', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_5', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_6', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_7', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_8', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_9', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнение')),
                ('action_4_10', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_11', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
                ('action_4_12', models.CharField(blank=True, max_length=350, null=True, verbose_name='Действие для выполнения')),
            ],
            options={
                'verbose_name': 'Стартовая программа',
                'verbose_name_plural': 'Стартовые программы',
            },
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slide_1', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_2', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_3', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_4', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
                ('slide_5', models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='Слайд')),
            ],
            options={
                'verbose_name': 'Слайдер',
                'verbose_name_plural': 'Слайды',
            },
        ),
    ]

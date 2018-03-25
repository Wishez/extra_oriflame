# -*- coding: utf-8 -*-
from django.contrib import admin
from myadmin.admin import admin_site
from .models import *

class ConsultantAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('last_name', 'first_name', 'consultant_num', 'phone_number', 'email', 'status', 'refferal_url', 'url_to_personal_room', 'registered_date')
    # date_hierarchy = 'last_name'
    list_filter = ('status', 'last_name', 'first_name', 'middle_name',  'city', 'region', 'registered_date')
    filter_horizontal = ('user_lead', 'user_lead_1', 'user_lead_2',)
    search_fields = (
        'last_name',
        'first_name',
        'middle_name',
        'city',
        'region',
        'consultant_num',
        # 'passport_data',
        'birthday',
        # 'street',
        # 'num_home',
        # 'num_apartment',
        'email',
        'phone_number',
        'user_led',
        'user_led_1',
        'user_led_2',
    )
    fieldsets = (
        ('Основная информация', {
            'fields': (
                ('first_name', 'last_name',),
                ('middle_name',),
                ('birthday',),
            ),
        },),
        ('Личные данные', {
            'fields': (
                ('phone_number', 'email',),
                ('city', 'region', 'registered_date',),
            ),
        },),
        ('Данные консультанта', {
            'fields': (
                ('consultant_num', 'status',),
            ),
        },),
        ('Рферальные данные', {
            'fields': (
                ('refferal_url','url_to_personal_room',),
                ('user_led', 'user_led_1', 'user_led_2',),
            ),
        },),
        ('Списки рефералов консультанта', {
            'fields': (
                ('user_lead',), ('user_lead_1',), ('user_lead_2',),
            ),
        },),
    )

class RelatedConsultantAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('last_name', 'first_name',  'middle_name', 'consultant_num', 'refferal_url', 'url_to_personal_room',)
    list_filter = ('last_name', 'first_name', 'middle_name', 'consultant_num',)
    filter_horizontal = ('user_lead', 'user_lead_1', 'user_lead_2',)
    search_fields = (
        'last_name',
        'first_name',
        'middle_name',
        'user_led',
        'user_led_1',
        'user_led_2',
    )
    fieldsets = (
        ('Основная информация', {
            'fields': (
                ('first_name', 'last_name',),
            ),
        },),
        ('Данные консультанта', {
            'fields': (
                ('consultant_num',),
            ),
        },),
        ('Рферальные данные', {
            'fields': (
                ('refferal_url', 'url_to_personal_room',),
                ('user_led', 'user_led_1', 'user_led_2',),
            ),
        },),
        ('Списки рефералов консультанта', {
            'fields': (
                ('user_lead',), ('user_lead_1',), ('user_lead_2',),
            ),
        },),
    )
# Register your models here.

admin_site.register(User, ConsultantAdmin)
admin_site.register(RefferalConsultant, ConsultantAdmin)
admin_site.register(RelatedConsultant, RelatedConsultantAdmin)
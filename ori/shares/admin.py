# -*- coding: utf-8 -*-
from myadmin.admin import admin_site
from django.contrib import admin
from .models import Share
@admin.register(Share, site=admin_site)
class AdminShare(admin.ModelAdmin):
    list_per_page = 6
    list_display = ('page_title', 'title', 'published_date', 'created', 'modified',)
    filter_fields = ('page_title', 'title', 'published_date', 'created', 'modified',)
    search_fields = ('page_title', 'title', 'published_date', 'created', 'modified',)
    date_hierarchy = 'published_date'
    ordering = ('-published_date',)
    prepopulated_fields = {
        'slug': ('page_title', 'title',),
        'page_title': ('title',),
    }
    fieldsets = (
        ('Базовая настройка страницы акции', {
            'fields': (
                ('page_title', 'slug',),
                ('meta',),
            ),
        },),
        ('Контент страницы', {
            'fields': (
                ('title',),
                ('announce',),
                ('text'),
            ),
        },),
        ('Публикация', {
            'fields': (
                ('published_date',),
            ),
        },),
        ('Медиа', {
            'fields': (
                ('img',),
                ('image', 'image_1',),
                ('image_2', 'image_3',),
            ),
        },),
    )


# Register your models here.

# admin_site.register(Share)
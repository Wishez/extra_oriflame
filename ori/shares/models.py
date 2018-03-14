# -*- encoding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from pages.validators import validate_slug_field
from pages.models import BasePage, TimeStampedModel
import uuid as uuid_lib
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit


class Item(TimeStampedModel):

    class Meta:
        db_table = 'Предмет'
class ShareManager(models.Manager):
    def copy_share(self, instance):
        newShare = instance
        newShare.slug = '%s_%s' % (instance.slug, instance.id)
        newShare.pk = None
        newShare.uuid = uuid_lib.uuid4()

        newShare.save()

share_image_options = {
    "verbose_name": _('Изображение'),
    "upload_to": 'shares/',
    "processors": [ResizeToFit(1280)],
    "format": 'PNG',
    "options": {'quality': 70},
    "blank": True,
    "null": True,
    "help_text": _('Путь к изображению /media/shares/ на сервере.')
}

class Share(BasePage):
    title = models.CharField(max_length=250, verbose_name="Название акции")
    uuid = models.UUIDField(
        _('Идентификатор'),
        db_index=True,
        default=uuid_lib.uuid4,
        editable=True
    )

    img = ProcessedImageField(
        verbose_name=_('Главное Изображение'),
        upload_to='shares/',
        processors=[ResizeToFit(1280)],
        format='PNG',
        options={'quality': 70},
        blank=True,
        null=True,
        help_text=_('Путь к изображению /media/shares/ на сервере.')
    )


    image = ProcessedImageField(
        **share_image_options
    )

    image_1 = ProcessedImageField(
        **share_image_options
    )
    image_2 = ProcessedImageField(
        **share_image_options
    )
    image_3 = ProcessedImageField(
        **share_image_options
    )

    slug = models.SlugField(
        _('Название ссылки к странице акции'),
        help_text=_('К примеру, "new-share-for_2018"'),
        max_length=150,
        validators=[validate_slug_field],
        blank=True,
        null=True
    )

    text = models.TextField(
        _('Контент'),
        max_length=16384, blank=True, null=True)
    announce = models.TextField(
        _('Анонс акции'),
        max_length=560,
        blank=True,
        null=True
    )
    published_date = models.DateTimeField(
        _('Дата публикации'),
        blank=True,
        null=True
    )
    objects = ShareManager()
    class Meta:
        verbose_name = _('Акция')
        # db_table = 'extra_oriflame_shares'
        verbose_name_plural = _('Акции')
        ordering = ['-published_date']

    def publish(self):
        self.published_date= timezone.now()
        self.save()

    def __str__(self):
        return self.title





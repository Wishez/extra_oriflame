from rest_framework.serializers import ModelSerializer




class SharesListSerializer(ModelSerializer):
    class Meta:
        model = Share
        fields = (
            'uuid',
            'title',
            'img',
            'slug',
            'announce',
            'published_date',
        )


class ShareSerializer(ModelSerializer):
    class Meta:
        model = Share
        fields = (
            'uuid',
            'title',
            'img',
            'slug',
            'text',
            'published_date',
        )



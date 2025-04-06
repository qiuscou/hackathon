# Удаляем все модели, так как для простого чата они не нужны
# Сообщения будут храниться только в памяти во время работы сервера

from django.db import models
from django.utils import timezone

class Message(models.Model):
    username = models.CharField(max_length=255, verbose_name='Имя пользователя')
    content = models.TextField(verbose_name='Сообщение')
    timestamp = models.DateTimeField(default=timezone.now, verbose_name='Время отправки')

    class Meta:
        ordering = ['timestamp']
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
        db_table = 'chat_message'

    def __str__(self):
        return f'{self.username}: {self.content[:50]}...'

    @classmethod
    def get_recent_messages(cls, limit=50):
        """Получить последние сообщения"""
        return cls.objects.all().order_by('-timestamp')[:limit]

    @classmethod
    def get_messages_by_user(cls, username):
        """Получить все сообщения конкретного пользователя"""
        return cls.objects.filter(username=username).order_by('timestamp')
from django.shortcuts import render
from .models import Message

def index(request):
    return render(request, 'chat/index.html')

def room(request):
    # Загружаем последние 50 сообщений
    messages = Message.objects.all()[:50]
    return render(request, 'chat/room.html', {
        'room_name': 'chat',
        'messages': messages
    })
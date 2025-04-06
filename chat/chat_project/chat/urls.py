from django.urls import path
from . import views

app_name = 'chat'

urlpatterns = [
    path('', views.index, name='index'),  # для /chat/
    path('room/chat/', views.room, name='room'),  # для /chat/room_name/
]
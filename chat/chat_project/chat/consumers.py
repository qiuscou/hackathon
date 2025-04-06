import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            "chat",
            self.channel_name
        )
        await self.accept()
        
        # Отправляем последние сообщения при подключении
        messages = await self.get_recent_messages()
        for message in messages:
            await self.send(text_data=json.dumps({
                'message': message.content,
                'username': message.username,
                'timestamp': message.timestamp.isoformat()
            }))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            "chat",
            self.channel_name
        )

    @database_sync_to_async
    def save_message(self, username, message):
        return Message.objects.create(username=username, content=message)

    @database_sync_to_async
    def get_recent_messages(self, limit=50):
        return list(Message.get_recent_messages(limit))

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        username = text_data_json['username']

        # Сохраняем сообщение в базу данных
        saved_message = await self.save_message(username, message)

        await self.channel_layer.group_send(
            "chat",
            {
                'type': 'chat_message',
                'message': message,
                'username': username,
                'timestamp': saved_message.timestamp.isoformat()
            }
        )

    async def chat_message(self, event):
        message = event['message']
        username = event['username']
        timestamp = event['timestamp']

        await self.send(text_data=json.dumps({
            'message': message,
            'username': username,
            'timestamp': timestamp
        }))
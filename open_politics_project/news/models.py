from django.db import models
from django.contrib.auth.models import User
import uuid

class NewsSource(models.Model):
    # Standard ID field
    id = models.AutoField(primary_key=True)
    news_api_source_id = models.CharField(max_length=255, null=True, blank=True, unique=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    category = models.CharField(max_length=255, null=True, blank=True)
    language = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    
class Article(models.Model):
    url = models.URLField(unique=True)
    headline = models.TextField()
    content = models.TextField()
    source = models.CharField(max_length=255)

class NewsArticle(models.Model):
    source = models.ForeignKey(NewsSource, on_delete=models.CASCADE)
    author = models.CharField(max_length=255, null=True, blank=True)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    url = models.URLField()
    url_to_image = models.URLField(null=True, blank=True)
    published_at = models.DateTimeField() # This assumes that the datetime is in ISO format and can be parsed directly by Django
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

from django.db.models.signals import pre_save
from django.dispatch import receiver
import uuid


class Conversation(models.Model):
    title = models.CharField(max_length=100, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.user}:{self.title}"

class ChatMessages(models.Model):
    id = models.AutoField(primary_key=True)
    conversation = models.ForeignKey(Conversation, default=None, on_delete=models.CASCADE)
    user_response = models.TextField(null=True, default='')
    ai_response = models.TextField(null=True, default='')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.conversation}: {self.id}"


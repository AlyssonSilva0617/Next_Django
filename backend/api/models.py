# models.py
from django.db import models

class Item(models.Model):
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
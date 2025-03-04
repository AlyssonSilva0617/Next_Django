# models.py
from django.db import models

class Item(models.Model):
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    content = models.TextField()
    color = models.CharField(max_length=12)
    updated_at = models.DateTimeField()

    def __str__(self):
        return self.title
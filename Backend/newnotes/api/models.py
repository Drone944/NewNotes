from django.db import models

class Note(models.Model):
    text = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now=True)
    deadline = models.TextField(null=True, blank=True)

def __str__(self):
    return self.body[0:200]

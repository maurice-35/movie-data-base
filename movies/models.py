from django.db import models
from django.db.models.fields import CharField

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500, default=None)
    video = models.CharField(max_length=500, default=None)
    audio_language = models.CharField(max_length=50, default=None)
    run_time_mins = models.PositiveIntegerField(default=None)
    year = models.PositiveIntegerField(default=None)
    views_count = models.PositiveIntegerField(default=None)
    worth_a_watch = models.BooleanField(default=True, null=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="shows",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.title} - {self.year}"

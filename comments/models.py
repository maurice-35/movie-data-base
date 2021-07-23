from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True) # Add comments
    movies = models.ForeignKey(
        "movies.Movie", # Defines the relationship
        related_name = "comments", 
        on_delete = models.CASCADE
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comments",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"Comments: {self.text}"

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')  # get the token fron request

        if not header:
            return None

        if not header.startswith('Bearer'):
        # If token format is incorrect, throw error
            raise PermissionDenied(detail="Invalid token")  

        token = header.replace('Bearer ', '')  # Removes and replaces 'Bearer' with an empty string

        try:     # information about user that lives in the token
            payload =  jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            print('PAYLOAD', payload)
            user = User.objects.get(pk=payload.get('sub')) 
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid token')
        except User.DoesNotExist:
            raise PermissionDenied(detail='user not found')

        return (user, token)   # If user is found

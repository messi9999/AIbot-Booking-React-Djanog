from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def searchnews(request):
    # Handle the request and perform necessary operations
    # Return an appropriate HTTP response

    # Example: Return a JSON response
    
    data = {'message': 'Hello, World!'}
    return JsonResponse(data)
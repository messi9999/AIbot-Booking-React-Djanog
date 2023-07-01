from django.urls import path
from . import views

urlpatterns = [
    path('api/news/', views.searchnews, name='news'),
    # Add more URL patterns as needed
]
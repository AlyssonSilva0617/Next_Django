# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.get_items, name='get_items'),
    path('items/create/', views.create_item, name='create_item'),
    path('items/update/<int:pk>/', views.update_item, name='update_item'),
    path('items/delete/<int:pk>/', views.delete_item, name='delete_item'),
    path('categories/', views.get_categories, name='category-list'),
]

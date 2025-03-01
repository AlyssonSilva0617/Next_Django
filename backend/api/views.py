# api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count, Sum
from .models import Item
from .serializers import ItemSerializer

@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
    items = items.order_by('-updated_at') 
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_item(request):
    serializer = ItemSerializer(data=request.data)
    print("request data", request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_item(request, pk):
    try:
        item = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ItemSerializer(item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_item(request, pk):
    try:
        item = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_categories(request):
    # Grouping by 'category' and getting total items per category
    grouped_items = Item.objects.values('category').annotate(total_items=Count('id'))
    print(grouped_items)
    categories = [
        { 'id': 1, 'title': "University", 'color': " #ccffcc" },
        { 'id': 2, 'title': "Shopping List", 'color': "#ffffcc" },
        { 'id': 3, 'title': "Ideas", 'color': "#ccccff" },
    ]
    for category in categories:
        # Find the matching category from grouped_items
        matching_category = next((item for item in grouped_items if item['category'] == category['title']), None)
        
        if matching_category:
            # If found, add the total_items to the category
            category['total_items'] = matching_category['total_items']
        else:
            # If not found, you can set total_items to 0 or some default value
            category['total_items'] = 0
    return Response(categories) 

@api_view(['GET'])
def get_items_condition(request, pk):
    items = Item.objects.all()

    if pk:
        # Filter items where category matches exactly 'University'
        items = items.filter(category=pk)
    items = items.order_by('-updated_at') 
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

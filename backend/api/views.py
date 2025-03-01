# api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer

@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
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
    categories = [
        { 'id': 1, 'title': "University", 'color': " #ccffcc" },
        { 'id': 2, 'title': "Shopping List", 'color': "#ffffcc" },
        { 'id': 3, 'title': "Ideas", 'color': "#ccccff" },
    ]
    return Response(categories) 

@api_view(['GET'])
def get_items_condition(request, pk):
    items = Item.objects.all()

    if pk:
        # Filter items where category matches exactly 'University'
        items = items.filter(category=pk)
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

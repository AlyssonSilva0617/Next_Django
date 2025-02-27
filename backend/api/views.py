# api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .models import Category
from .serializers import ItemSerializer
from .serializers import CategorySerializer

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
    categories = Category.objects.all()  # Fetch all categories
    serializer = CategorySerializer(categories, many=True)  # Serialize the categories
    return Response(serializer.data) 

def create_categories():
    categories = ['Random Thouthts', 'University', 'Personal']

    for category_name in categories:
        # Use get_or_create to ensure no duplicate categories are added
        category, created = Category.objects.get_or_create(name=category_name)
        if created:
            print(f"Created: {category_name}")
        else:
            print(f"Already exists: {category_name}")

# Call this function wherever you need to insert the categories
create_categories()
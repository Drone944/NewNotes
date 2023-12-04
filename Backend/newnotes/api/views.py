from django.shortcuts import render
from .models import Note
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer

@api_view(['GET'])
def getNotes(request): 
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request, pk): 
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)
  
@api_view(['PUT'])
def updateNote(request, pk):
  data = request.data
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(instance=note, data=data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
  delnote = Note.objects.get(id=pk)
  delnote.delete()
  return Response('Deleted')

@api_view(['POST'])
def createNote(request):
  data = request.data
  note = Note.objects.create(text=data['text'], deadline=data['deadline'])
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)
  
  

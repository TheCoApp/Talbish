from django.shortcuts import render
from django.http import HttpResponse
from TalbishData.testFunctions import TestStrings

def index(request):
    return HttpResponse("Rango says hello world!")

def buzush(request):
    return HttpResponse("Boaz is a monkey")

def buz(request):
	temp TestStrings()
	if temp.GetString == "Shaul is a baboon!":
		return HttpResponse("function is working")
	else:
		return HttpResponse("function is NOT working")



    
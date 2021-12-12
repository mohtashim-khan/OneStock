from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    
    api_urls = {
        'AddBrokerages':'/AddBrokerage',
        'CreateBondOrder':'/CreateBondOrder',
        'CreateCashOrder':'/CreateCashOrder',
        'CreateCommoditiesOrder':'/CreateCommoditiesOrder',
        'CreateCryptoOrder':'/CreateCryptoOrder',
        'CreateRegularStockOrder':'/CreateOrder',
        'CreateRealEstateOrder':'/CreateRealEstateOrder',
        'ModifyBondOrder':'/ModifyBondOrder',
        'ModifyCashOrder':'/ModifyCashOrder',
        'ModifyCommoditiesOrder':'/ModifyCommoditiesOrder',
        'ModifyCryptoOrder':'/ModifyCryptoOrder',
        'ModifyBondOrder':'/ModifyBondOrder',
        'ModifyRegularStockOrder':'/ModifyOrder',
        'ModifyRealEstateOrder':'/ModifyRealEstateOrder',
        'Sign-in' : '/SignIn',
        'Sign-Up':'/SignUp',
    }
    
    
    return Response(api_urls)
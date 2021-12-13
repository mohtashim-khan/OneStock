from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *



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
        'GetStockOrderHistory' :'/GetStockOrderHistory',
        'DeleteOrderbyID':'/DeleteOrderbyID',
        'DeletebyOrderReqID':'/DeletebyOrderReqID',
        'CreateOrdersFromImport':'/CreateOrdersFromImport',
    }
    return Response(api_urls)

@api_view(['GET'])
def getSpecificStockOrderHistory(request):

    history = Specific_Stock_History.objects.all()
    serializer = Specific_Stock_HistorySerializer(history, many = True, context={'request': request})
    return Response(serializer.data)
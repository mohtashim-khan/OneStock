from django.db.models.query import QuerySet
from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework import generics



# Create your views here.

class BrokeragesGetPost(generics.ListCreateAPIView):
    queryset = Brokerage.objects.all()
    serializer_class = BrokerageSerializer

class BrokeragesGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brokerage.objects.all()
    serializer_class = BrokerageSerializer


class BondsGetPost(generics.ListCreateAPIView):
    queryset = Bonds.objects.all()
    serializer_class = BondsSerializer

class BondsGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bonds.objects.all()
    serializer_class = BondsSerializer

class CashGetPost(generics.ListCreateAPIView):
    queryset = Cash.objects.all()
    serializer_class = CashSerializer

class CashGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cash.objects.all()
    serializer_class = CashSerializer

class CommodotiesGetPost(generics.ListCreateAPIView):
    queryset = Commodities.objects.all()
    serializer_class = CommoditiesSerializer

class CommoditiesGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Commodities.objects.all()
    serializer_class = CommoditiesSerializer

class CryptoGetPost(generics.ListCreateAPIView):
    queryset = CryptoCurrency.objects.all()
    serializer_class = CryptoCurrencySerializer

class CrytpoGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = CryptoCurrency.objects.all()
    serializer_class = CryptoCurrencySerializer

class StockOrdersGetPost(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class StockOrdersGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class RealEstateGetPost(generics.ListCreateAPIView):
    queryset = RealEstate.objects.all()
    serialzer_class = RealEstateSerializer

class RealEstatePutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealEstate.objects.all()
    serializer_class = RealEstateSerializer

class SpecificStockOrderHistoryGetPost(generics.ListCreateAPIView):
    queryset = Specific_Stock_History.objects.all()
    serializer_class = Specific_Stock_HistorySerializer

class SpecificStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Specific_Stock_History.objects.all()
    serializer_class = Specific_Stock_HistorySerializer

class TotalStockOrderHistoryGetPost(generics.ListCreateAPIView):
    queryset = TotalStockHistory.objects.all()
    serializer_class = TotalStockHistorySerializer

class TotalStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = TotalStockHistory.objects.all()
    serializer_class = TotalStockHistorySerializer

class UserGetPost(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrderFormGetPost(generics.ListCreateAPIView):
    queryset = OrderForm.objects.all()
    serialzer_class = OrderFormSerilaizer

class OrderFormPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderForm.objects.all()
    serializer_class = OrderFormSerilaizer

class DividendGetPost(generics.ListCreateAPIView):
    queryset = Dividend.objects.all()
    serialzer_class = DividendSerializer

class DividendPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer

class AccountGetPost(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serialzer_class = AccountSerializer

class AccountPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


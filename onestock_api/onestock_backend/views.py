from django.db.models.query import QuerySet
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken



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
    serializer_class = RealEstateSerializer

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

#User SignUp
class CreateUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class OrderFormGetPost(generics.ListCreateAPIView):
    queryset = OrderForm.objects.all()
    serializer_class = OrderFormSerializer

class OrderFormPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderForm.objects.all()
    serializer_class = OrderFormSerializer

class DividendGetPost(generics.ListCreateAPIView):
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer

class DividendPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer

class AccountGetPost(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


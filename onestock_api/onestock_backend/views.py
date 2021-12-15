from django.db.models.query import QuerySet
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken



# Create your views here.

class BrokeragesGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Brokerage.objects.all()
    serializer_class = BrokerageSerializer

class BrokeragesGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Brokerage.objects.all()
    serializer_class = BrokerageSerializer


class BondsGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Bonds.objects.all()
    serializer_class = BondsSerializer

class BondsGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Bonds.objects.all()
    serializer_class = BondsSerializer

class CashGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Cash.objects.all()
    serializer_class = CashSerializer

class CashGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Cash.objects.all()
    serializer_class = CashSerializer

class CommodotiesGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Commodities.objects.all()
    serializer_class = CommoditiesSerializer

class CommoditiesGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Commodities.objects.all()
    serializer_class = CommoditiesSerializer

class CryptoGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CryptoCurrency.objects.all()
    serializer_class = CryptoCurrencySerializer

class CrytpoGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = CryptoCurrency.objects.all()
    serializer_class = CryptoCurrencySerializer

class StockOrdersGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class StockOrdersGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class RealEstateGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = RealEstate.objects.all()
    serializer_class = RealEstateSerializer

class RealEstatePutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = RealEstate.objects.all()
    serializer_class = RealEstateSerializer

class SpecificStockOrderHistoryGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Specific_Stock_History.objects.all()
    serializer_class = Specific_Stock_HistorySerializer

class SpecificStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Specific_Stock_History.objects.all()
    serializer_class = Specific_Stock_HistorySerializer

class TotalStockOrderHistoryGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = TotalStockHistory.objects.all()
    serializer_class = TotalStockHistorySerializer

class TotalStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated]
    queryset = OrderForm.objects.all()
    serializer_class = OrderFormSerializer

class OrderFormPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = OrderForm.objects.all()
    serializer_class = OrderFormSerializer

class DividendGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer

class DividendPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer

class AccountGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


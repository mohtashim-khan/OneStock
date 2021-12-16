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
    serializer_class = BondsSerializer

    def get_queryset(self):
        user = self.request.user
        return Bonds.objects.filter(user=user)


class BondsGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = BondsSerializer

    def get_queryset(self):
        user = self.request.user
        return Bonds.objects.filter(user=user)


class CashGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CashSerializer

    def get_queryset(self):
        user = self.request.user
        return Cash.objects.filter(user=user)


class CashGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CashSerializer

    def get_queryset(self):
        user = self.request.user
        return Cash.objects.filter(user=user)


class CommodotiesGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CommoditiesSerializer

    def get_queryset(self):
        user = self.request.user
        return Commodities.objects.filter(user=user)


class CommoditiesGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CommoditiesSerializer

    def get_queryset(self):
        user = self.request.user
        return Commodities.objects.filter(user=user)


class CryptoGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CryptoCurrencySerializer

    def get_queryset(self):
        user = self.request.user
        return CryptoCurrency.objects.filter(user=user)


class CrytpoGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CryptoCurrencySerializer

    def get_queryset(self):
        user = self.request.user
        return CryptoCurrency.objects.filter(user=user)


class StockOrdersGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(orderReqID__in = OrderForm.objects.filter(account__in = Account.objects.filter(user = user)))
        


class StockOrdersGetPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(orderReqID__in = OrderForm.objects.filter(account__in = Account.objects.filter(user = user)))


class RealEstateGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RealEstateSerializer

    def get_queryset(self):
        user = self.request.user
        return RealEstate.objects.filter(user=user)


class RealEstatePutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RealEstateSerializer

    def get_queryset(self):
        user = self.request.user
        return RealEstate.objects.filter(user=user)


class SpecificStockOrderHistoryGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = Specific_Stock_HistorySerializer

    def get_queryset(self):
        user = self.request.user
        return Specific_Stock_History.objects.filter(stockHistoryID__in = TotalStockHistory.objects.filter(user = user))


class SpecificStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = Specific_Stock_HistorySerializer

    def get_queryset(self):
        user = self.request.user
        return Specific_Stock_History.objects.filter(user=user)


class TotalStockOrderHistoryGetPost(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TotalStockHistorySerializer

    def get_queryset(self):
        user = self.request.user
        return TotalStockHistory.objects.filter(user=user)


class TotalStockOrderHistoryPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TotalStockHistorySerializer

    def get_queryset(self):
        user = self.request.user
        return TotalStockHistory.objects.filter(user=user)

# User SignUp


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
    serializer_class = OrderFormSerializer

    def get_queryset(self):
        user = self.request.user
        return OrderForm.objects.filter(account__in = Account.objects.filter(user = user))


class OrderFormPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderFormSerializer

    def get_queryset(self):
        user = self.request.user
        return OrderForm.objects.filter(account__in = Account.objects.filter(user = user))


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
    serializer_class = AccountSerializer

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(user=user)


class AccountPutPatchDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AccountSerializer

    def get_queryset(self):
        user = self.request.user
        return Account.objects.filter(user=user)

from rest_framework import serializers

from onestock_backend.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields ='__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields ='__all__'

class BrokerageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brokerage
        fields ='__all__'

class OrderFormSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = OrderForm
        fields ='__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields ='__all__'

class TotalStockHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalStockHistory
        fields ='__all__'

class Specific_Stock_HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specific_Stock_History
        fields ='__all__'

class DividendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dividend
        fields = '__all__'

class RealEstateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealEstate
        fields ='__all__'

class CommoditiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commodities
        fields ='__all__'

class CryptoCurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = CryptoCurrency
        fields ='__all__'

class BondsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bonds
        fields ='__all__'

class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cash
        fields ='__all__'


        
        

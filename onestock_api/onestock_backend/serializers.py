from rest_framework import serializers

from onestock_backend.models import *


class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    isSuperUser = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('email', 'user_name', 'password', 'isSuperUser')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

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


        
        

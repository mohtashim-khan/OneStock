from rest_framework import serializers

from onestock_backend.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields =['id','username', 'email', 'password', 'isSuperUser']

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields =['id','accountValue', 'accountType', 'user']

class BrokerageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brokerage
        fields = ['id','name', 'fees', 'perOrderFees', 'currencyConversionRate']

class OrderFormSerilaizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderForm
        fields = ['id', 'typeofFile', 'numOfOrders', 'dateRequested', 'account']

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'ticker', 'quantity', 'purchasePrice', 'purchaseTime', 'purchaseTime', 'orderReqID']

class TotalStockHistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TotalStockHistory
        fields = ['id','uniqueTickers','totalInvested','quantityOfTrades','netProfit','user']

class Specific_Stock_HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Specific_Stock_History
        fields = ['id','ticker','industry','netProfit','exchange','amountShares','currentValue','stockHistoryID','user']

class DividendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dividend
        fields = ['id','ticker','date','Yield','TaxRate']

class RealEstateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RealEstate
        fields = ['id','valuation','location','type','user']

class CommoditiesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Commodities
        fields = ['id','valuation','type','user']

class CryptoCurrencySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CryptoCurrency
        fields = ['id','valuation','location','name','purchasePrice','quantity','user']

class BondsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bonds
        fields = ['id','valuation','interest','principal','maturityDate','user']

class CashSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cash
        fields = ['id','valuation','bank','currency','user']


        
        

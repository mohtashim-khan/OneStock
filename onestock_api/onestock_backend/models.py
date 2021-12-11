from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length= 100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    isSuperUser = models.CharField(max_length=1)



class Account(models.Model):
    accountValue = models.IntegerField()
    accountType = models.IntegerField()
    user = models.ForeignKey(User, on_delete = models.CASCADE)

class Brokerage(models.Model):
    fees = models.IntegerField()
    perOrderFees = models.IntegerField()
    currencyConversionRate = models.IntegerField()

class OrderForm(models.Model):
    typeofFile = models.CharField(max_length = 100)
    numOfOrders = models.IntegerField()
    dateRequested = models.DateField(max_length = 100)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

class Order(models.Model):
    ticker = models.CharField(max_length = 100)
    quantity = models.IntegerField()
    purchasePrice = models.IntegerField()
    purchaseTime = models.DateTimeField(max_length = 100)
    orderReqID = models.ForeignKey(OrderForm, on_delete=models.CASCADE)



class TotalStockHistory(models.Model):
    uniqueTickers = models.BigIntegerField()
    totalInvested = models.BigIntegerField()
    quantityOfTrades = models.BigIntegerField()
    netProfit = models.BigIntegerField()
    user = models.ForeignKey(User, on_delete=CASCADE)

class Specific_Stock_History(models.Model):
    ticker = models.CharField(max_length=100, unique = True)
    industry = models.CharField(max_length = 100)
    netProfit = models.IntegerField()
    exchange = models.CharField(max_length = 100)
    amountShares = models.IntegerField()
    currentValue = models.IntegerField()
    stockHistoryID = models.ForeignKey(TotalStockHistory, on_delete=models.CASCADE, null=True, blank = True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)

class Dividend (models.Model):
    ticker = models.ForeignKey(Specific_Stock_History, on_delete=CASCADE)
    date = models.DateField(unique=True)
    Yield= models.IntegerField()
    TaxRate = models.IntegerField()
    
    class Meta:
        unique_together = ('ticker', 'date')

class RealEstate(models.Model):
    valuation = models.BigIntegerField()
    location = models.CharField(max_length = 100)
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

class Commodities(models.Model):
    valuation = models.BigIntegerField()
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

class CryptoCurrency(models.Model):
    valuation = models.BigIntegerField()
    location = models.CharField(max_length = 100)
    name = models.CharField(max_length = 100)
    purchasePrice = models.BigIntegerField()
    quantity = models.BigIntegerField()
    user = models.ForeignKey(User,on_delete=CASCADE)

class Bonds(models.Model):
    valuation = models.BigIntegerField()
    interest = models.CharField(max_length = 100)
    principal = models.CharField(max_length = 100)
    maturityDate = models.BigIntegerField()
    user = models.ForeignKey(User,on_delete=CASCADE)

class Cash(models.Model):
    valuation = models.BigIntegerField()
    bank = models.CharField(max_length = 100)
    currency = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)




        

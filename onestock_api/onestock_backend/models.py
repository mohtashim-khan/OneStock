from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length= 100, unique = True)
    email = models.CharField(max_length=100, unique= True)
    password = models.CharField(max_length=100)
    isSuperUser = models.CharField(max_length=1)

    def __str__(self) -> str:
        return str(self.username)
    
class Account(models.Model):
    accountValue = models.IntegerField()
    accountType = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    
    def __str__(self) -> str:
        return str(self.user) + self.accountType

class Brokerage(models.Model):
    name = models.CharField(max_length=100)
    fees = models.IntegerField()
    perOrderFees = models.IntegerField()
    currencyConversionRate = models.IntegerField()

    def __str__(self) -> str:
        return self.name

class OrderForm(models.Model):
    typeofFile = models.CharField(max_length = 100)
    numOfOrders = models.IntegerField()
    dateRequested = models.DateField(max_length = 100)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.id)

class Order(models.Model):
    ticker = models.CharField(max_length = 100)
    quantity = models.IntegerField()
    purchasePrice = models.IntegerField()
    purchaseTime = models.DateTimeField(max_length = 100)
    orderReqID = models.ForeignKey(OrderForm, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return str(self.id)

class TotalStockHistory(models.Model):
    uniqueTickers = models.BigIntegerField()
    totalInvested = models.BigIntegerField()
    quantityOfTrades = models.BigIntegerField()
    netProfit = models.BigIntegerField()
    user = models.ForeignKey(User, on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.id

class Specific_Stock_History(models.Model):
    ticker = models.CharField(max_length=100, unique = True)
    industry = models.CharField(max_length = 100)
    netProfit = models.IntegerField()
    exchange = models.CharField(max_length = 100)
    amountShares = models.IntegerField()
    currentValue = models.IntegerField()
    stockHistoryID = models.ForeignKey(TotalStockHistory, on_delete=models.CASCADE, null=True, blank = True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.ticker

class Dividend (models.Model):
    ticker = models.ForeignKey(Specific_Stock_History, on_delete=CASCADE)
    date = models.DateField(unique=True)
    Yield= models.IntegerField()
    TaxRate = models.IntegerField()
    
    class Meta:
        unique_together = ('ticker', 'date')

    def __str__(self) -> str:
        return self.ticker+": "+self.date

class RealEstate(models.Model):
    valuation = models.BigIntegerField()
    location = models.CharField(max_length = 100)
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.type

class Commodities(models.Model):
    valuation = models.BigIntegerField()
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.type

class CryptoCurrency(models.Model):
    valuation = models.BigIntegerField()
    location = models.CharField(max_length = 100)
    name = models.CharField(max_length = 100)
    purchasePrice = models.BigIntegerField()
    quantity = models.BigIntegerField()
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.name

class Bonds(models.Model):
    valuation = models.BigIntegerField()
    interest = models.CharField(max_length = 100)
    principal = models.CharField(max_length = 100)
    maturityDate = models.BigIntegerField()
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.valuation

class Cash(models.Model):
    valuation = models.BigIntegerField()
    bank = models.CharField(max_length = 100)
    currency = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.valuation




        

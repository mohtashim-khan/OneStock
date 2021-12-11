from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length= 100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    isSuperUser = models.CharField(max_length=1)

class Specific_Stock_History(models.Model):
    ticker = models.CharField(max_length=100)
    industry = models.CharField(max_length = 100)
    netProfit = models.IntegerField()
    exchange = models.CharField(max_length = 100)
    amountShares = models.IntegerField()
    currentValue = models.IntegerField()
    user = models.ForeignKey(User, on_delete = models.CASCADE)

class Account(models.Model):
    accountValue = models.IntegerField()
    accountType = models.IntegerField()
    user = models.ForeignKey(User, on_delete = models.CASCADE)

class Brokerage(models.Model):
    fees = models.IntegerField()
    perOrderFees = models.IntegerField()
    currencyConversionRate = models.IntegerField()

class OrderForm(models.Model):
    typeofFile = models.CharField()
    numOfOrders = models.IntegerField()
    dateRequested = models.DateField()
    account = models.ForeignKey(Account, on_delete=models.CASCADE)



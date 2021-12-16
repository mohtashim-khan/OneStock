from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, user_name, email, password, isSuperUser, **other_fields):

        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)

        

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(user_name, email, password, isSuperUser, **other_fields)

    def create_user(self, user_name, email, password, isSuperUser, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, isSuperUser = isSuperUser, **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    user_name = models.CharField(max_length= 100, unique = True)
    email = models.EmailField(('email address'), unique= True)
    isSuperUser = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'user_name'

    REQUIRED_FIELDS = ['email', 'isSuperUser']
    def __str__(self) -> str:
        return str(self.user_name)
    
class Account(models.Model):
    accountValue = models.FloatField()
    accountType = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    
    def __str__(self) -> str:
        return str(self.user) + self.accountType

class Brokerage(models.Model):
    name = models.CharField(max_length=100)
    fees = models.FloatField()
    perOrderFees = models.FloatField()
    currencyConversionRate = models.FloatField()

    def __str__(self) -> str:
        return self.name

class OrderForm(models.Model):
    typeofFile = models.CharField(max_length = 100)
    numOfOrders = models.FloatField()
    dateRequested = models.DateField(max_length = 100)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return str(self.id)

class Order(models.Model):
    ticker = models.CharField(max_length = 100)
    buysell = models.CharField(max_length = 1)
    quantity = models.FloatField()
    purchasePrice = models.FloatField()
    purchaseTime = models.DateTimeField(max_length = 100)
    orderReqID = models.ForeignKey(OrderForm, on_delete=models.CASCADE)
    
    
    def __str__(self) -> str:
        return str(self.id)

class TotalStockHistory(models.Model):
    uniqueTickers = models.BigIntegerField()
    totalInvested = models.FloatField()
    quantityOfTrades = models.FloatField()
    netValue = models.FloatField()
    user = models.ForeignKey(User, on_delete=CASCADE)
    
    def __str__(self) -> str:
        return str(self.user)+": "+str(self.id)

class Specific_Stock_History(models.Model):
    ticker = models.CharField(max_length=100, unique = True)
    industry = models.CharField(max_length = 100)
    netProfit = models.FloatField()
    exchange = models.CharField(max_length = 100)
    amountShares = models.FloatField()
    currentValue = models.FloatField()
    stockHistoryID = models.ForeignKey(TotalStockHistory, on_delete=models.CASCADE, null=True, blank = True)

    def __str__(self) -> str:
        return str(self.user)+": "+self.ticker

class Dividend (models.Model):
    ticker = models.ForeignKey(Specific_Stock_History, on_delete=CASCADE)
    date = models.DateField(unique=True)
    Yield= models.FloatField()
    TaxRate = models.FloatField()
    
    class Meta:
        unique_together = ('ticker', 'date')

    def __str__(self) -> str:
        return self.ticker+": "+self.date

class RealEstate(models.Model):
    valuation = models.FloatField()
    location = models.CharField(max_length = 100)
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.type

class Commodities(models.Model):
    valuation = models.FloatField()
    type = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.type

class CryptoCurrency(models.Model):
    valuation = models.FloatField()
    name = models.CharField(max_length = 100)
    purchasePrice = models.FloatField()
    quantity = models.FloatField()
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.name

class Bonds(models.Model):
    valuation = models.FloatField()
    interest = models.CharField(max_length = 100)
    principal = models.CharField(max_length = 100)
    maturityDate = models.FloatField()
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.valuation

class Cash(models.Model):
    valuation = models.FloatField()
    bank = models.CharField(max_length = 100)
    currency = models.CharField(max_length = 100)
    user = models.ForeignKey(User,on_delete=CASCADE)

    def __str__(self) -> str:
        return str(self.user)+": "+self.valuation




        

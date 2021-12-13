from django.urls import path
from . import views

urlpatterns = [

    path('', views.apiOverview, name = "api-overview"),
    path('BrokeragesGetPost/', views.BrokeragesGetPost.as_view(), name = "BrokeragesGetPost"),
    path('BrokeragesGetPutPatchDelete/', views.BrokeragesGetPutPatchDelete.as_view(), name = "BrokeragesGetPutPatchDelete"),
    path('BondsGetPost/', views.BondsGetPost.as_view(), name = "BondsGetPost"),
    path('BondsGetPutPatchDelete/', views.BondsGetPutPatchDelete.as_view(), name = "BondsGetPutPatchDelete"),
    path('CashGetPost/', views.CashGetPost.as_view(), name = "CashGetPost"),
    path('CashGetPutPatchDelete/', views.CashGetPutPatchDelete.as_view(), name = "CashGetPutPatchDelete"),
    path('CommodotiesGetPost/', views.CommodotiesGetPost.as_view(), name = "CommodotiesGetPost"),
    path('CommoditiesGetPutPatchDelete/', views.CommoditiesGetPutPatchDelete.as_view(), name = "CommoditiesGetPutPatchDelete"),
    path('CryptoGetPost/', views.CryptoGetPost.as_view(), name = "CryptoGetPost"),
    path('CrytpoGetPutPatchDelete/', views.CrytpoGetPutPatchDelete.as_view(), name = "CrytpoGetPutPatchDelete"),
    path('StockOrdersGetPost/', views.StockOrdersGetPost.as_view(), name = "StockOrdersGetPost"),
    path('StockOrdersGetPutPatchDelete/', views.StockOrdersGetPutPatchDelete.as_view(), name = "StockOrdersGetPutPatchDelete"),
    path('RealEstateGetPost/', views.RealEstateGetPost.as_view(), name = "RealEstateGetPost"),
    path('RealEstatePutPatchDelete/', views.RealEstatePutPatchDelete.as_view(), name = "RealEstatePutPatchDelete"),
    path('SpecificStockOrderHistoryGetPost/', views.SpecificStockOrderHistoryGetPost.as_view(), name = "SpecificStockOrderHistoryGetPost"),
    path('SpecificStockOrderHistoryPutPatchDelete/', views.SpecificStockOrderHistoryPutPatchDelete.as_view(), name = "SpecificStockOrderHistoryPutPatchDelete"),
    path('TotalStockOrderHistoryGetPost/', views.TotalStockOrderHistoryGetPost.as_view(), name = "TotalStockOrderHistoryGetPost"),
    path('TotalStockOrderHistoryPutPatchDelete/', views.TotalStockOrderHistoryPutPatchDelete.as_view(), name = "TotalStockOrderHistoryPutPatchDelete"),
    path('UserGetPost/', views.UserGetPost.as_view(), name = "UserGetPost"),
    path('UserPutPatchDelete/', views.UserPutPatchDelete.as_view(), name = "UserPutPatchDelete"),
    path('OrderFormGetPost/', views.OrderFormGetPost.as_view(), name = "OrderFormGetPost"),
    path('OrderFormPutPatchDelete/', views.OrderFormPutPatchDelete.as_view(), name = "OrderFormPutPatchDelete"),
    path('DividendGetPost/', views.DividendGetPost.as_view(), name = "DividendGetPost"),
    path('DividendPutPatchDelete/', views.DividendPutPatchDelete.as_view(), name = "DividendPutPatchDelete"),
    path('AccountGetPost/', views.AccountGetPost.as_view(), name = "AccountGetPost"),
    path('AccountPutPatchDelete/', views.AccountPutPatchDelete.as_view(), name = "AccountPutPatchDelete"),






    





    
]

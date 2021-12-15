from django.urls import path
from . import views

urlpatterns = [

    path('BrokeragesGetPost/', views.BrokeragesGetPost.as_view(), name = "BrokeragesGetPost"),
    path('BrokeragesGetPutPatchDelete/<int:pk>/', views.BrokeragesGetPutPatchDelete.as_view(), name = "BrokeragesGetPutPatchDelete"),
    path('BondsGetPost/', views.BondsGetPost.as_view(), name = "BondsGetPost"),
    path('BondsGetPutPatchDelete/<int:pk>/', views.BondsGetPutPatchDelete.as_view(), name = "BondsGetPutPatchDelete"),
    path('CashGetPost/', views.CashGetPost.as_view(), name = "CashGetPost"),
    path('CashGetPutPatchDelete/<int:pk>/', views.CashGetPutPatchDelete.as_view(), name = "CashGetPutPatchDelete"),
    path('CommodotiesGetPost/', views.CommodotiesGetPost.as_view(), name = "CommodotiesGetPost"),
    path('CommoditiesGetPutPatchDelete/<int:pk>/', views.CommoditiesGetPutPatchDelete.as_view(), name = "CommoditiesGetPutPatchDelete"),
    path('CryptoGetPost/', views.CryptoGetPost.as_view(), name = "CryptoGetPost"),
    path('CrytpoGetPutPatchDelete/<int:pk>/', views.CrytpoGetPutPatchDelete.as_view(), name = "CrytpoGetPutPatchDelete"),
    path('StockOrdersGetPost/', views.StockOrdersGetPost.as_view(), name = "StockOrdersGetPost"),
    path('StockOrdersGetPutPatchDelete/<int:pk>/', views.StockOrdersGetPutPatchDelete.as_view(), name = "StockOrdersGetPutPatchDelete"),
    path('RealEstateGetPost/', views.RealEstateGetPost.as_view(), name = "RealEstateGetPost"),
    path('RealEstatePutPatchDelete/<int:pk>/', views.RealEstatePutPatchDelete.as_view(), name = "RealEstatePutPatchDelete"),
    path('SpecificStockOrderHistoryGetPost/', views.SpecificStockOrderHistoryGetPost.as_view(), name = "SpecificStockOrderHistoryGetPost"),
    path('SpecificStockOrderHistoryPutPatchDelete/<int:pk>/', views.SpecificStockOrderHistoryPutPatchDelete.as_view(), name = "SpecificStockOrderHistoryPutPatchDelete"),
    path('TotalStockOrderHistoryGetPost/', views.TotalStockOrderHistoryGetPost.as_view(), name = "TotalStockOrderHistoryGetPost"),
    path('TotalStockOrderHistoryPutPatchDelete/<int:pk>/', views.TotalStockOrderHistoryPutPatchDelete.as_view(), name = "TotalStockOrderHistoryPutPatchDelete"),
    path('CreateUser/', views.CreateUser.as_view(), name = "CreateUser"),
    path('LogOut/', views.BlacklistTokenUpdateView.as_view(), name = "logout"),
    path('OrderFormGetPost/', views.OrderFormGetPost.as_view(), name = "OrderFormGetPost"),
    path('OrderFormPutPatchDelete/<int:pk>/', views.OrderFormPutPatchDelete.as_view(), name = "OrderFormPutPatchDelete"),
    path('DividendGetPost/', views.DividendGetPost.as_view(), name = "DividendGetPost"),
    path('DividendPutPatchDelete/<int:pk>/', views.DividendPutPatchDelete.as_view(), name = "DividendPutPatchDelete"),
    path('AccountGetPost/', views.AccountGetPost.as_view(), name = "AccountGetPost"),
    path('AccountPutPatchDelete/<int:pk>/', views.AccountPutPatchDelete.as_view(), name = "AccountPutPatchDelete"),






    





    
]

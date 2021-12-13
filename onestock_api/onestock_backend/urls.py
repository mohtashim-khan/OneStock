from django.urls import path
from . import views

urlpatterns = [

    path('', views.apiOverview, name = "api-overview"),
    path('getSpecificStockHistory/', views.getSpecificStockOrderHistory, name = "specificStockHistory"),

    
]

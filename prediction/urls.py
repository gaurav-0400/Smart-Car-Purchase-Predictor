from django.urls import path
from .views import predict_car


urlpatterns = [
    path("predict/", predict_car, name="predict_car"),
]
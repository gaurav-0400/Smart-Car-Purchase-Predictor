from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pickle
# import numpy as np
import pandas as pd 

model = pickle.load(open("model.pkl", "rb"))

@api_view(["POST"])
def predict_car(request):
    try:
        gender = int(request.data.get("gender"))
        age = int(request.data.get("age"))
        salary = int(request.data.get("salary"))

        features = pd.DataFrame(
        [[gender, age, salary]],
        columns=["Gender", "Age", "EstimatedSalary"]
)

        prediction = model.predict(features)

        result = "Will Purchase Car" if prediction[0] == 1 else "Will Not Purchase Car"

        return Response({
            "prediction": result
        })

    except Exception as e:
        return Response({
            "error": str(e)
        })
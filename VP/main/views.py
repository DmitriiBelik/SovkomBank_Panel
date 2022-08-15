from django.shortcuts import render
import pandas as pd
import joblib
from django.views.decorators.csrf import csrf_protect


# def index(request):
#     return render(request, 'main/index.html')


@csrf_protect
def index(request):
    if request.method == 'POST':
        clf = joblib.load("C:/Users/Григорий/Desktop/Поднять сервер/MAC/clf.pkl")
        # Get values through input bars
        height = request.POST["height"]
        weight = request.POST["weight"]
        # Put inputs to dataframe
        x = pd.DataFrame([[height, weight]], columns=["Height", "Weight"])
        # Get prediction
        prediction = clf.predict(x)[0]
    else:
        prediction = ""
    print(111111111111111111111111111)
    return render(request, 'main/index.html', {'output': prediction})

import pandas as pd 
import numpy as np 
from sklearn.linear_model import LinearRegression 
from sklearn.pipeline import Pipeline 
import pickle 
import numpy as np 



import streamlit as st 
st.header('Car Purchase Prediction')
st.image('cardata.png')
st.set_page_config(layout='wide')
model=pickle.load(open('model.pkl','rb'))

gender=st.selectbox("Enter the gender",['male','female'])
if gender=='male':
    gender=1
else:
    gender=0

age=st.number_input("Enter age",value=18,min_value=18)
# age=st.slider("Age:",max_value=100,min_value=1,value=1)
est_salary=st.number_input("Estimated salary",value=0)


if st.button("Predict"):
    features=np.array([[gender,age,est_salary]])
    prediction=model.predict(features)

    if prediction[0]==1:
        st.info("You are eligible")
    else:
        st.error('You are not eligible')
    
    


















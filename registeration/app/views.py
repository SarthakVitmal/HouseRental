from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
# Create your views here.

def Home(request):
       return render(request,'HomePage.html')

def index(request):
     return render(request,'index.html')

def CreateAccount(request):
    if request.method == 'POST':
         username=request.POST.get('username')
         email=request.POST.get('email')
         password=request.POST.get('password')
         Mobile_No=request.POST.get('Mobile_No')
         my_user=User.objects.create_user(username,email,password)
         my_user.save()
         return redirect('LoginPage')
         
    return render(request,'CreateAccount.html')

def LoginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(f"Received username: {username}, password: {password}")
        user_credentials = authenticate(request, username=username, password=password)
        if user_credentials is not None:
            login(request, user_credentials)
            return redirect('Home')
        else:
            print("Authentication failed")
            return HttpResponse("Username or password is incorrect!!!")
    return render(request, 'LoginPage.html')


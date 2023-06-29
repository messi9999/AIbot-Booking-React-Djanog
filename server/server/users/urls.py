from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from users import views

app_name = "users"

urlpatterns = [
    path("api/auth/register/", views.UserRegisterationAPIView.as_view(), name="create-user"),
    path("api/auth/login/", views.UserLoginAPIView.as_view(), name="login-user"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("api/auth/logout/", views.UserLogoutAPIView.as_view(), name="logout-user"),
    path("api/", views.UserAPIView.as_view(), name="user-info"),
    path("api/profile/", views.UserProfileAPIView.as_view(), name="user-profile"),
    path("api/profile/avatar/", views.UserAvatarAPIView.as_view(), name="user-avatar"),
]
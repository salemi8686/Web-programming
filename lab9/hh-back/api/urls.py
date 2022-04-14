from django.urls import path
from api.views import company_list

#from views import company_list
from api.views import vacancy_list,vacancies_by_company
from api.views import company_detail,vacancy_detail,vacancy_list_sorted

urlpatterns = [
    path('companies/',company_list),
    path('companies/<int:company_id>/',company_detail),
    path('companies/<int:company_id>/vacancies/',vacancies_by_company),
    path('vacancies/',vacancy_list),
    path('vacancies/<int:vacancy_id>/',vacancy_detail),
    path('vacancies/top_ten/',vacancy_list_sorted)
]

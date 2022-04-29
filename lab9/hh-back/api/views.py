from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json,safe=False)

def company_detail(request,company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message' : str(e)},status=400)

    return JsonResponse(company.to_json())

def vacancies_by_company(request,company_id):
    vacancies = Vacancy.objects.filter(company = company_id).all()
    if vacancies:
         vacancies_json = [vacancy.to_json() for vacancy in vacancies]
         return JsonResponse(vacancies_json,safe=False)
    else:
        return JsonResponse({'message' : 'Vacancies in this company does not exists'},status=400)

def vacancy_list(request):
    vacansies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacansies]
    return JsonResponse(vacancies_json,safe=False)

def vacancy_detail(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message' : str(e)},status=400)

    return JsonResponse(vacancy.to_json())

def vacancy_list_sorted(request):
    vacansies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacansies]
    return JsonResponse(vacancies_json,safe=False)

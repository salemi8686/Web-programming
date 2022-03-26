a=int(input())
b=int(input())

for i in range(a,b+1):
   j = i**0.5
   s=j//1
   if j==s:
       print(i,end=' ')
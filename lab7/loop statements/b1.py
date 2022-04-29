n = int(input())

i = 2
s = 0
while i*i<=n:
   if n%i==0:
       print(i)
       s = 1
       break
   i+=1
if s==0:
    print(n)
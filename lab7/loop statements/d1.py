from pickle import TRUE


n = int(input())

i = 0
a = 0
while 2**i<=n:
   if 2**i==n:
       print('YES')
       a +=1
       break
   i+=1

if(a==0):
    print('NO')

n = int(input())
a = input().split()
k=0
for i in range(1,n):
    if int(a[i])>=0 and int(a[i-1])>=0:
        print('YES')
        k+=1
        break
    elif int(a[i])<0 and int(a[i-1])<0:
        print('YES')
        k+=1
        break
if(k==0):
    print('NO')
    
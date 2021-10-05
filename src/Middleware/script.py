t = int(input())
for i in range(t):
    n = int(input())
    k = 1
    if n == 0:
        print(1)
    elif n == 1 or n == 2:
        print(2)
    else:
        while (k*2 <= n):
            k = k * 2
        if k == n:
            print(n)
        elif n == (2*k-1):
            print(n+1)
        else:
            print(k)

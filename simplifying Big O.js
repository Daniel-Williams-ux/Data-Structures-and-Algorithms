/*
Product Rule
If the Big O is the product of multiple terms, drop the constant terms.
*/
O(4 * n) => O(n)
O(512 * n) => O(n)
O(n/3) = O((1/3) * n) => O(n)
O( 5 * n * n) = O(n * n) => O(n^2)
O(765) = O(1) => //constant time



/*
Sum Rule
If the Big O is the sum of mutiple terms, only keep the largest term, drop the rest.
*/
O(n + 1000) => O(n)
O(n^2 + n) => O(n^2)
O(n + 500 + n^3 + n^2) => O(n^3)


/*
Putting it all together
To simplify fully, apply the product rule, followed by the sum rule.
*/

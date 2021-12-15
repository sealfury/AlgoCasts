### RECURSIVE FIBONACCI SOLUTION

- Calling **fib(5)** produces a fn tree of sorts that results in **fib(1)** called **5** times, then added
- Calling **fib(6)** produces a fn tree of sorts that results in **fib(1)** called **8** times, then added
- Basically calling **fib(1)** the **x** number of times that is next in the fibonacci sequence
- **NB:** _Recursive solution creates an exponential runtime situation_

### SOLUTION TO TIME COMPLEXITY PROBLEM

#### MEMOIZATION

- Store the arguments of each function call along with the result. If the function is called again with the _same arguments_, return the precomputed result, rather than running the function again
- _many interview questions concerning runtime issues can be solved by memoization_
- *slow fib fn* -> **Memoization function** -> *fast fib fn*

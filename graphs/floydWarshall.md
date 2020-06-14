# Floyd Warshall Algorithm

- Used to find shortest path sum between each vertices in a graph. (All-shortest-path-sum problem)
- Can be used for both weighted/unweighted and directed/undirected graphs
  - For unweighted graphs the edges are assumed to have weight 1 (as usual)
- Uses Adjaceny Matrix to calculate the path sums
  - The diagonals of Adjaceny Matrix are assigned to `0` to show no edge from the node to itself
  - When there is no edge that cell is assigned to `Infinity`

For each source,destination pairs `(u,v)`, we compare the path sum from `u->v` _or_ `u->k->v`, `k` being an intermediate vertex. And update the path sum in the matrix using the formula

```
matrix[u][v] = Math.min(matrix[u][v], matrix[u][k]+matrix[k][v])
```

Which means the path sum from `u->v` is minimum of either `u->v` or from `u->k + k->v`

---

```
  1
/ | \
2-3--4
\
  5
```

For the graph above initial Matrix denoted as A<sup>0</sup> is -

```
  1 2 3 4 5
1 0 1 1 1 I
2 1 0 1 I 1
3 1 1 0 1 I
4 1 I 1 0 I
5 I 1 I I 0
```

A<sup>1</sup> means between `(u,v)` we use vertex `1` as intermediate vertex, therefore paths are considered as `u->1->v`, using formula above we update A<sup>0</sup> to get A<sup>1</sup>

```
for 1->X and X->1, 1 is already included thus those rows and columns arent updated.

Calulations -
2->3 = min(2->3, 2->1 + 1->3) = min(1, 1+1) = min(1,2) = 1
2->4 = min(2->4, 2->1 + 1->4) = min(I, 1+1) = min(I,2) = 2
2->5 = min(2->5, 2->1 + 1->5) = min(1, 1+I) = min(1,I) = 1

3->2 = min(3->2, 3->1 + 1->2) = min(1, 1+1) = min(1,2) = 1
3->4 = min(3->4, 3->1 + 1->4) = min(1, 1+1) = min(1,2) = 1
3->5 = min(3->5, 3->1 + 1->5) = min(I, 1+I) = min(I,I) = I

4->2 = min(4->2, 4->1 + 1->2) = min(I, 1+1) = min(I,2) = 2
4->3 = min(4->3, 4->1 + 1->3) = min(1, 1+1) = min(1,2) = 1
4->5 = min(4->5, 4->1 + 1->5) = min(I, 1+1) = min(I,2) = 2

5->2 = min(5->2, 5->1 + 1->2) = min(1, I+1) = min(1,I) = 1
5->3 = min(5->3, 5->1 + 1->3) = min(I, I+1) = min(I,I) = I
5->4 = min(5->4, 5->1 + 1->4) = min(I, I+1) = min(I,I) = I
```

```
  1 2 3 4 5
1 0 1 1 1 I
2 1 0 1 2 1
3 1 1 0 1 I
4 1 2 1 0 2
5 I 1 I I 0
```

Similarly we calculate A<sup>2</sup> using A<sup>1</sup>

```
  1 2 3 4 5
1 0 1 1 1 I
2 1 0 1 2 1
3 1 1 0 1 I
4 1 2 1 0 2
5 I 1 I I 0
```

Similarly we calculate A<sup>3</sup> using A<sup>2</sup>

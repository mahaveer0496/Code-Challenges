/*
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim

prim's


- pick edge with min weight
- now pick the edge with min weight from all edges of both vertices
- as you keep connecting vertices, keep picking min weight edge

For disconnected graph's spanning tree isnt possible cuz all vertices can never be connected
*/

/*
kruskal's
- make a min heap of edges with their weight
- pop from min-heap
  - if popped edge makes a cycle, discard it
- repeat

can give MST for disconnected graphs
*/

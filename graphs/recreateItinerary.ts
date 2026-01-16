// https://leetcode.com/problems/reconstruct-itinerary/description/

type Tickets = [string, string];
type Graph = Map<string, string[]>;

function recreateItinerary(tickets: Tickets) {
  tickets.sort();

  const graph = buildGraph(tickets);

  return dfs(tickets, graph);
}

function dfs(tickets: Tickets, graph: Graph, city = "JFK", path = ["JFK"]) {
  if (path.length === tickets.length + 1) return true;

  const queue = graph.get(city) || [];

  if (queue.length === 0) return false;

  for (const nextCity of queue.slice()) {
    path.push(nextCity);
    queue.shift();

    if (dfs(tickets, graph, nextCity, path)) return path;

    path.pop();
    queue.push(nextCity);
  }

  return false;
}

function buildGraph(tickets: Tickets) {
  const graph: Graph = new Map();

  for (const [src, dest] of tickets) {
    const edges = graph.get(src) || [];
    edges.push(dest);

    graph.set(src, edges);
  }

  return graph;
}

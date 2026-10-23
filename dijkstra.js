
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3 }
};

function dijkstra(graph, start) {
    
    let distances = {};

    for (let vertex of Object.keys(graph)) {
        if (vertex === start) {
            distances[vertex] = 0;
        } else {
            distances[vertex] = Infinity;
        }
    }

    let visited = new Set();

   
    while (true) {
        let minDistance = Infinity;
        let currentVertex = null;

       
        for (let vertex of Object.keys(graph)) {
            if (
                !visited.has(vertex) &&
                distances[vertex] < minDistance
            ) {
                minDistance = distances[vertex];
                currentVertex = vertex;
            }
        }

       
        if (currentVertex === null) {
            break;
        }

    
        visited.add(currentVertex);

       
        for (let neighbor in graph[currentVertex]) {
            let newDistance =
                distances[currentVertex] +
                graph[currentVertex][neighbor];

            
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
    }


    return distances;
}

console.log(dijkstra(graph, "B"));

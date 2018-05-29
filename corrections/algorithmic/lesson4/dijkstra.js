var fs = require('fs');

function distance(node_a, node_b) {
    return Math.sqrt((node_a.x - node_b.x) ** 2 + (node_a.y - node_b.y) ** 2);
}


function closest(nodes, distances) {
    let smallest_distance = null;
    let closest_node = null;
    for (let node of nodes) {
        if (distances[node] !== null &&
            (smallest_distance === null ||
             distances[node] < smallest_distance)) {
            smallest_distance = distances[node];
            closest_node = node;
        }
    }
    return closest_node;
}


function build_path(end_node, start_node, parents) {
    let node = end_node;
    let path = [];
    while (node !== start_node && node !== undefined) {
        path.push(node);
        node = parents[node];
    }
    path.push(start_node);
    path.reverse();
    return path
}


function dijkstra(graph, start_node, end_node) {
    start_node = String(start_node);
    end_node = String(end_node);
    let unvisited = new Set(Object.keys(graph.nodes));
    let distances = {};
    for (let node in graph.nodes) {
        distances[node] = null;
    }
    distances[start_node] = 0;
    let parents = {};
    let current_node = start_node;
    while (unvisited.size && current_node !== end_node
           && current_node !== null) {
        let current_distance = distances[current_node];
        for (let neighbor of graph.edges[current_node]) {
            let new_distance = current_distance + distance(
                graph.nodes[current_node], graph.nodes[neighbor]);
            if (unvisited.has(neighbor)
                && (distances[neighbor] === null
                    || new_distance < distances[neighbor])) {
                distances[neighbor] = new_distance;
                parents[neighbor] = current_node;
            }
        }
        unvisited.delete(current_node);
        current_node = closest(unvisited, distances);
    }
    if (current_node === null){
        throw Error("cannot reach the destination node (not connected)");
    }
    return build_path(end_node, start_node, parents);
}


function parseGraph(graph) {
    let parsed_edges = {}
    for (let n of Object.keys(graph.nodes)) {
        parsed_edges[n] = [];
    }
    for (let e of graph.edges) {
        parsed_edges[e.source].push(e.target);
    }
    return {
        'nodes': graph.nodes,
        'edges': parsed_edges
    };
}

function serializePath(path, graph) {
    let nodes = {};
    let edges = [];
    let previous = null;
    for (let node of path) {
        graph.nodes[node]["color"] = null;
        nodes[node] = graph.nodes[node];
        if (previous !== null) {
            edges.push({
                "source": previous,
                "target": node,
                "color": "red",
                "stroke_width": 4
            });
        }
        previous = node;
    }
    return {
        "nodes": nodes,
        "edges": edges
    };
}

function writePath(path, out_file) {
    let asString = JSON.stringify(path);
    fs.writeFileSync(out_file, asString, 'utf8');
}


let g = require('./belleville_graph.json');
let graph = parseGraph(g);
let start = Object.keys(graph.nodes)[0];
let end = Object.keys(graph.nodes)[10];
let path = dijkstra(graph, start, end);

console.log('path length: ' + path.length);
writePath(serializePath(path, graph), './shortest_path.json');

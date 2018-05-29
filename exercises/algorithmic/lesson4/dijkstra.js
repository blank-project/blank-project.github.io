var fs = require('fs');

function scaleGraph(graph){
    let max_x = 1;
    let max_y = 1;
    let min_x = 0;
    let min_y = 0;
    for (let node in graph.nodes){
        max_x = Math.max(max_x, graph.nodes[node].x);
        max_y = Math.max(max_y, graph.nodes[node].y);
        min_x = Math.min(min_x, graph.nodes[node].x);
        min_y = Math.min(min_y, graph.nodes[node].y);
    }
    max_x -= min_x;
    max_y -= min_y;
    for (let node in graph.nodes){
        graph.nodes[node]['x'] -= min_x;
        graph.nodes[node]['x'] /= max_x;
        graph.nodes[node]['y'] -= min_y;
        graph.nodes[node]['y'] /= max_y;
    }
}


function graphForPlotting(graph, color="red", strokeWidth=4, pointSize=2) {
    scaleGraph(graph);
    let nodes = graph.nodes;
    let edges = [];
    for (let node in nodes) {
        nodes[node]['point_size'] = pointSize;
        for (let neighbor of graph.edges[node]){
            edges.push({
                "source": node,
                "target": neighbor,
                "color": color,
                "stroke_width": strokeWidth
            });
        }
    }
    return {
        "nodes": nodes,
        "edges": edges
    };
}

function pathToGraph(path, graph) {
    let nodes = {};
    let edges = [];
    let previous = null;
    for (let node of path) {
        nodes[node] = graph.nodes[node];
        edges[node] = [];
        if (previous !== null) {
            edges[node].push(previous);
            edges[previous].push(node);
        }
        previous = node;
    }
    return {
        "nodes": nodes,
        "edges": edges
    };
}

function writeGraph(graph, out_file, color="red", strokeWidth=4, pointSize=2){
    let asString = JSON.stringify(graphForPlotting(
        graph, color, strokeWidth, pointSize));
    fs.writeFileSync(out_file, asString, 'utf8');
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


// On va implémenter l'algorithme de Dijkstra pour trouver le plus court chemin
// d'un point à un autre dans un graphe:
//
// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
//
// On suppose que notre graphe représente le plan d'une ville: les noeuds sont
// des intersections et les arêtes sont des rues.
//
// Chaque noeud a des attributs "x" et "y" qui donnent ses coordonnées dans un
// plan.
//
// Commencez par bien comprendre comment fonctionne l'algorithme.
//
// on nous donne un graphe, un noeud de départ et un noeud d'arrivée
//
// Imaginons qu'un noeud A a un voisin B, et que la distance qui sépare A de B
// est d. Si je peux atteindre A en parcourant une distance D, je peux atteindre
// B en parcourant une distance D + d.
//
// Par exemple, une route de 775 km connecte Paris à Marseille et une route de
// 67 km connecte Marseille à Toulon. Donc en partant de Paris et en passant par
// Marseille, je peux atteindre Toulon en parcourant 775 + 67 = 842 km -- il y a
// peut-être un chemin plus rapide, mais je sais déjà que le chemin le plus
// rapide fera 842 km ou moins.
//
// La distance minimale pour atteindre un noeud d'arrivée est le min sur ses
// voisins de la distance pour atteindre le voisin + la distance entre le voisin
// et le noeud d'arrivée.
//
// En se basant sur cette idée, on va construire une table qui contient, pour
// chaque noeud du graphe, la distance minimale qu'on doit parcourir pour
// l'atteindre. On explore les noeuds un par un, et à chaque fois qu'on visite
// un noeud, on met à jour les distances minimales de ses voisins. Il faut aussi
// retenir quel chemin a permis d'atteindre ce noeud en parcourant la distance
// minimale.
//
// Plus précisément:
//   - on maintient une table {noeud: distance} qui contient les distances
//     minimales pour atteindre chaque noeud. Au début, la distance du noeud de
//     départ est 0 et les distances des autres noeuds sont +infini
//   - on maintient une liste des noeuds qu'on n'a pas encore explorés.
//   - on maitient une table de "parents": pour chaque noeud, le noeud précédent
//     dans le chemin qui permet de l'atteindre avec une distance minimale.
//   - À chaque étape,
//     - on choisit le noeud inexploré le plus proche d'après la table de
//       distances actuelle.
//     - on met à jour les distances de ses voisins et la table de parents.
//   - On s'arrête quand on est sur le point de visiter le noeud d'arrivée.
//   - On utilise la table de parents pour reconstruire le plus court chemin.
//
// N'hésitez pas à vous aider de la page wikipédia qui fournit du pseudocode.
//


// Exercice 1:
//
// Tout d'abord il va nous falloir une fonction pour calculer la distance entre
// deux noeuds.
// https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
// d(a, b)^2 = (a.x - b.x)^2 + (a.y - b.y)^2
// vous pouvez utilisez Math.sqrt pour la racine carrée
// et **2 pour le carré
function distance(node_a, node_b) {

}

// Pour cet exercice, on représente un graphe par un objet g qui a deux
// attributs:
// - g.nodes contient les noeuds: c'est un objet dont les clés sont les id
// des noeuds, et les valeurs ont la forme {'x': ..., 'y': ...}
// - g.edges contient les arêtes: les clés sont les id des noeuds, et les
//   valeurs sont les listes des id des voisins.
// par exemple pour le graphe
//
//  a -- b -- c
//
// {
//     "nodes": {
//         "a": {
//             "x": 0,
//             "y": 0
//         },
//         "b": {
//             "x": 10,
//             "y": 0
//         },
//         "c": {
//             "x": 20,
//             "y": 10
//         }
//     },
//     "edges": {
//         "a": ["b"],
//         "b": ["a", "c"],
//         "c": ["b"]
//     }
// }
//

// Exercice 2:
// construisez l'objet qui correspond au graphe
//
// a -- b
// |    |
// d -- c -- e
//
// (choisissez les coordonnées que vous voulez pour les points)
//
// vérifiez que le graphe est non dirigé: si a est voisin de b, b est voisin de
// a
//
// ajoutez une arête entre a et c
//
// ajoutez un noeud f, connecté à e et c
//

let g = {
    "nodes": {
        "a": {
            "x": 0,
            "y": 0
        },
        "b": {
            "x": .5,
            "y": 0
        },
        "c": {
            "x": 1,
            "y": 10
        }
    },
    "edges": {
        "a": ["b"],
        "b": ["a", "c"],
        "c": ["b"]
    }
};

writeGraph(g, 'graph.json', color='black', strokeWidth=2, pointSize=10);
//
// vous pouvez voir votre graphe en ouvrant index.html dans un navigateur
//

// Exercice 3
// Écrivez une fonction qui construit un chemin avec 10 noeuds
// en utilisant une boucle for
// 1 -- 2 -- ... -- 10
//
// function makePath(){ ... }
// g = makePath();
// writeGraph(g, 'graph.json', color='black', strokeWidth=2, pointSize=10);

// Exercice 4 (difficile)
// On s'attaque maintenant à la recherche de plus courts chemins
//

// Exercice 4.1
// On va écrire la fonction closest, qui reçoit une liste de noeuds candidats et
// une table de distances, et retourne le noeud qui a la distance la plus
// petite.
// par exemple: closest(["a", "b"], {"a": 3., "b": 2.2, "c": 1}) -> "b"
// les noeuds qui ont une distance === null ne sont pas pris en compte.
// par exemple: closest(["a", "b"], {"a": 3., "b": null, "c": 1}) -> "a"
// si il n'y a pas de solution on renvoie null
//
// complétez la fonction ci-dessous
function closest(nodes, distances) {
    let smallest_distance = null;
    let closest_node = null;
    // pour chaque noeud candidat,
    for (let node of nodes) {
        // si il est plus proche,
        if (distances[node] !== null &&
            (smallest_distance === null ||
             distances[node] < smallest_distance)) {
            // TODO: on fait quoi?
            // ...
        }
    }
    return closest_node;
}


// cette fonction reconstruit le plus court chemin à partir de la table de
// parents
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


// Exercice 4.2
// On va écrire l'algorithme de dijkstra pour trouver le plus court chemin d'un
// point de départ à un point d'arrivée dans un graphe.
// la fonction dijkstra reçoit un graphe, un point de départ (l'id d'un noeud),
// et un point d'arrivée (l'id d'un autre noeud)

// complétez la fonction ci-dessous
function dijkstra(graph, start_node, end_node) {
    start_node = String(start_node);
    end_node = String(end_node);

    // on initialise unvisited: la liste des noeuds qu'on a pas encore visités.
    // au début, elle contient tous les noeuds du graphe.
    let unvisited = new Set(Object.keys(graph.nodes));

    // on initialise distances: la table qui donne les distances minimales.
    // au début, toutes les distances sont null sauf celle du noeud de départ
    // qui vaut 0
    let distances = {};
    for (let node in graph.nodes) {
        distances[node] = null;
    }
    distances[start_node] = 0;

    // on initialise parents: la table qui associe à chaque noeud, le noeud
    // précédent dans le plus court chemin pour y accéder. Au début, cette table
    // est vide.
    let parents = {};

    // current node est le noeud courant. on commence par le noeud de départ
    let current_node = start_node;

    // tant qu'il reste des noeuds à visiter et qu'on a pas atteint le noeud
    // d'arrivée,
    while (unvisited.size && current_node !== end_node
           && current_node !== null) {
        // TODO: quelle est la distance au noeud courant (utilisez la table
        // distances)
        // let current_distance = ...

        // pour chaque voisin du noeud courant,
        for (let neighbor of graph.edges[current_node]) {
             // TODO: ... la distance à ce voisin en passant par le noeud
             // courant
            // let new_distance = ...

            // si c'est plus court que la plus courte distance qu'on avait
            // trouvée pour atteindre ce voisin,
            if (unvisited.has(neighbor)
                && (distances[neighbor] === null
                    || new_distance < distances[neighbor])) {
                // On fait quoi?
                // TODO
                // distances[neighbor] = ...
                // parents[neighbor] = ...
            }
        }
        // on retire le noeud courant de ceux qu'on a pas visités: on connaît la
        // plus courte distance pour l'atteindre, sa distance et son parent ne
        // vont plus changer.
        unvisited.delete(current_node);

        // puis passer au noeud suivant: il faut choisir le plus proche de ceux
        // qu'on a pas visités. utilisez la fonction closest
        // current_node = ...
    }
    if (current_node === null){
        throw Error("cannot reach the destination node (not connected)");
    }
    return build_path(end_node, start_node, parents);
}

// let p = dijkstra(g, "a", "e");
// writeGraph(pathToGraph(p, g),
//            'path.json', color='red', strokeWidth=4, pointSize=10);
//
// let belleville = parseGraph(require('./belleville_graph.json'));
// writeGraph(belleville, 'graph.json',
//              color='black', strokeWidth=1, pointSize=2);
// let start = Object.keys(belleville.nodes)[0];
// let end = Object.keys(belleville.nodes)[10];
// let belleville_path = dijkstra(belleville, start, end);
// writeGraph(pathToGraph(belleville_path, belleville),
//            'path.json', color='red', strokeWidth=4, pointSize=0);

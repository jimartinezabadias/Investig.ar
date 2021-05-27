import { ElementRef } from "@angular/core";
import { CanvasGraph } from "./CanvasGraph";
import { GraphNode } from "./GraphNode";
import { INodeData, GRAPH_1, SOLUTION_1 } from "./graphs_available/Graph1_data_testing";

const NODE_REGULAR_IMAGE_URL = "./assets/images/rulit-node-regular.svg"
const NODE_HOVER_IMAGE_URL = "./assets/images/rulit-node-hover.svg"
const NODE_START_IMAGE_URL = "./assets/images/rulit-node-start.svg"
const NODE_END_IMAGE_URL = "./assets/images/rulit-node-end.svg"

export const DEFAULT_GRAPH_SOLUTION = "19db35dd";

export function getGraphAndSolutionData(theId: string): {graphData: Array<INodeData>, solutionData:Array<number>} {
    // console.log(theId);
    if (theId === DEFAULT_GRAPH_SOLUTION) {
        // use a copy in each exercise
        let solution = Object.assign([],SOLUTION_1);
        return {graphData: GRAPH_1, solutionData: solution};
    }
}

// Creates a new graph and adds nodes, edges and canvas.
export async function buildGraph(GRAPH_DATA: Array<INodeData>, theCanvas: ElementRef<HTMLCanvasElement>): Promise<CanvasGraph>{

    let nodeRegularImg = await loadImage(NODE_REGULAR_IMAGE_URL);
    let nodeHoverImg = await loadImage(NODE_HOVER_IMAGE_URL);
    let nodeStartImg = await loadImage(NODE_START_IMAGE_URL);
    let nodeEndImg = await loadImage(NODE_END_IMAGE_URL);

    let newGraph = new CanvasGraph(nodeRegularImg, nodeHoverImg , nodeStartImg, nodeEndImg);

    let nodeSpacing = theCanvas.nativeElement.width * 0.052;
    let nodeRadius = nodeSpacing * 0.6;

    // Add nodes and edges from GRAPH_DATA object
    GRAPH_DATA.forEach( nodeData => {
        let newNode = buildNode(nodeData, nodeSpacing, nodeRadius);
        newGraph.addNode(newNode, nodeData.edges);
    });
    
    newGraph.canvas = theCanvas;
    
    return newGraph;
}

function buildNode( nodeData: INodeData, nodeSpacing: number, nodeRadius: number ): GraphNode {
    return new GraphNode(
        nodeData.id,
        nodeData.isFirstNode, 
        nodeData.isLastNode,
        false,
        nodeData.column * nodeSpacing,
        nodeData.row * nodeSpacing,
        nodeRadius
    );
}

function loadImage(src): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}
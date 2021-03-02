import { Circle } from "./Circle";
import { COLOR_WHITE, COLOR_GREEN, COLOR_VIOLET } from "./CanvasGraph";

interface IVertex {
    id: number,
    isFirstNode: boolean,
    isLastNode: boolean,
    isActive: boolean,
    isHighlighted: boolean,
    circle: Circle,
    draw(ctx: CanvasRenderingContext2D): void,
    resetColor(): void
}

export class Vertex implements IVertex {

    private _circle: Circle;
    private _isHighlighted: boolean;

    constructor (   private _id: number, 
                    private _isFirstNode: boolean, 
                    private _isLastNode: boolean, 
                    private _isActive: boolean,
                    theX: number, 
                    theY: number,
                    radius,
                    private _nodeImage: HTMLImageElement ){
                    this._circle = new Circle(radius,theX,theY,COLOR_WHITE);
                    this._isHighlighted = false;
                    this.resetColor();
                }
    
    get id(): number {
        return this._id;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(e:boolean) {
        this._isActive = e;
        this.resetColor();
    }

    get isHighlighted(): boolean {
        return this._isHighlighted;
    }

    set isHighlighted(e: boolean) {
        this._isHighlighted = e;
    }

    get isFirstNode(): boolean {
        return this._isFirstNode;
    }

    get isLastNode(): boolean {
        return this._isLastNode;
    }
    
    get circle(): Circle {
        return this._circle;
    }

    draw(theContext: CanvasRenderingContext2D): void {
        
        this.circle.draw(theContext);

        theContext.beginPath();
        theContext.drawImage(
            this._nodeImage,
            this._circle.posX - this._circle.radius,
            this._circle.posY - this._circle.radius,
            this._circle.radius * 2,
            this._circle.radius * 2
            );
        theContext.closePath();
        
    }

    resetColor(): void{
        this._circle.fill = COLOR_WHITE;
        if ( this.isActive || this.isFirstNode || this.isLastNode )
            this._circle.fill = COLOR_GREEN;
        if ( this.isFirstNode || this.isLastNode )
            this._circle.fill = COLOR_VIOLET;
        if ( this.isActive )
            this._circle.fill = COLOR_GREEN;
    }

}

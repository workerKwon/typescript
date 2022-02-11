class SquareClass {
    constructor(public width: number) {}
}
class RectangleClass extends SquareClass {
    constructor(public width: number, public height: number) {
        super(width);
    }   
}
type ShapeClassType = SquareClass | RectangleClass;

function calculateArea3(shape: Shape) {
    if(shape instanceof RectangleClass) {
        shape;
        return shape.width * shape.height;
    } else {
        shape;
        return shape.width * shape.width;
    }
}

// 인터페이스는 타입으로만 사용 가능하지만, 클래스로 선언하면 타입과 값으로 모두 사용할 수 있으므로 오류가 없다.
// type Shape = Square | Rectangle 부분에서 Rectangle은 타입으로 참조되지만, shape instanceof Rectangle에서는 값으로 참조된다.
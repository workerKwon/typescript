// 런타임에는 타입 체크가 불가능하다
interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;

function calculateArea1(shape: Shape) {
    if(shape instanceof Rectangle) { // instanceof 체크는 런타임에 일어나지만, 
                                    // Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없다.
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}

function calculateArea2(shape: Shape) {
    if('height' in shape) {
        shape; // Rectangle type
        return shape.width * shape.height;
    } else {
        shape; // Square type
        return shape.width * shape.width;
    }
}
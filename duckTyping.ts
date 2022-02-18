interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = {x:3, y:4, name: "Zee"};
console.log(calculateLength(v));

// Vector2D를 duck(오리)라고 한다면, NamedVector도 duck(오리)의 특성을 가지고 있기 때문에
// Vector2D 타입의 파라미터를 필요로하는 calculateLength함수에 NamedVector를 넣어줘도 동작이 가능하다
// 구조적 타이핑이라고 함.

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length
    }
}
export const PI=3.14;

export function areaOfCircle(radius){
    let area=PI*Math.pow(radius,2)
    return area;
}

export function areaOfRectangle(length,breadth){
    let area = length*breadth;
    return area;
}

export function areaOfCylinder(radius,height){
    let curvedSurfaceArea=2*PI*radius*height;
    let totalSurfaceArea=curvedSurfaceArea+(2*PI*Math.pow(radius,2));
    return [curvedSurfaceArea,totalSurfaceArea];
}
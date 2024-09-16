// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(att){
    this.length = att.length;
    this.width = att.width;
    this.height = att.height;
  }
  volume() {
    return (this.length) * (this.width) * (this.height)
  }
  surfaceArea() {
    return 2 * ((this.length) * (this.width) + (this.length) * (this.height) + (this.width) * (this.height))
  }
}

class CubeMaker extends CuboidMaker2 {
  constructor(att) {
    super(att);
    this.edge = att.edge;
  }
  volume() {
    return Math.pow(this.edge, 3);
  }
  surfaceArea() {
    return 6 * (Math.pow(this.edge, 2));
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5,
});

const cube = new CubeMaker({
  edge: 3
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 56

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

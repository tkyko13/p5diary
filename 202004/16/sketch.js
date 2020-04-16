function setup() {
  createCanvas(windowWidth, windowHeight);
  // noSmooth();

  voronoiCellStrokeWeight(0);

  //Sets 30 random sites with 50 minimum distance to be added upon computing
  //Please note that this method is just for testing, you should use your own
  //method for placing random sites with minimum distance
  voronoiRndSites(10);

  voronoi(width, height, true);

  voronoiDraw(0, 0, true);

  for (let id = 0; id < 10; id++) {
    let v = voronoiGetCells()[id];
    const dCels = voronoiGetDiagram().cells;

    stroke(0, 0, 0);
    strokeWeight(10);
    noFill();
    beginShape();
    for (let i = 0; i < v.length; i++) {
      const sx = dCels[id].site.x;
      const sy = dCels[id].site.y;
      curveVertex(lerp(v[i][0], sx, 0.2), lerp(v[i][1], sy, 0.2));
    }
    endShape(CLOSE);
  }
}

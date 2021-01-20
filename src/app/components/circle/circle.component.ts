import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit, AfterContentInit {
  @Input() holdings: any; // decorate the property with @Input()
  
  elementDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.drawCircles(this.generateData(this.holdings));
  }

  generateData(holdings: any): any {
    const result = [];
    holdings.forEach(() => {
      result.push({radius: 50});
    });
    return result;
  }

  drawCircles(circles) {

    // append the svg object to the body of the page
  const svg = d3.select("#data-visualisation")
  .append("svg")
    .attr("width", this.elementDimensions.width)
    .attr("height", this.elementDimensions.height)

  this.paintOnScreen(circles, svg);
  }
  paintOnScreen(shapes, svgElement) {
    const strokeWidth = 4;
    shapes.forEach((circle, index, reference) => {
      svgElement.append("g")
      .selectAll("circle")
      .data(shapes)
      .enter()
      .append("circle")
        .attr("r", circle.radius)
        .attr("cx", ((this.elementDimensions.width / reference.length) * index) + circle.radius + strokeWidth) 
        .attr("cy", this.elementDimensions.height / 2)
        .style("fill", "#69b3a2")
        .style("fill-opacity", 0.3)
        .attr("stroke", "#69a2b2")
        .style("stroke-width", strokeWidth) 
      });
    }
}

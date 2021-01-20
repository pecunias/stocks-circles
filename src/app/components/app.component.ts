import { Component } from '@angular/core';
import { IntradayService } from '../services/intraday/intraday.service';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private intradayService: IntradayService, private portfolioService: PortfolioService) {}
  
  portfolio = [];

  ngAfterContentInit() {
    this.portfolioService.getPortfolio().then(data => this.portfolio = data);
    this.intradayService.getIntraday();
  }
}

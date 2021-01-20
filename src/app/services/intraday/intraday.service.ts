import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PortfolioService } from '../portfolio/portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class IntradayService {

  constructor(public http: HttpClient, private portfolioService: PortfolioService) { }

  getIntraday(symbols: []) {
    const url = this.generateUrl();
    const result = this.http.get(url).subscribe(data => console.log(data));
    return result;
  }

  generateUrl(): string {
    return `http://api.marketstack.com/v1/intraday/latest?access_key=${environment.apiKeyStockData}&symbols=${this.getPositions()}`;
  }

  getPositions(): string {
    let result = '';
    this.portfolioService.getPortfolio().forEach((holding, index, reference) => {
      if ((index + 1) < reference.length) {
        result += `${holding.symbol},`
      }
      else {
        result += holding.symbol;
      }
    });
    return result;
  }
}

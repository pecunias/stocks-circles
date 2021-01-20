import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PortfolioService } from '../portfolio/portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class IntradayService {

  constructor(public http: HttpClient, private portfolioService: PortfolioService) { }

  async getIntraday() {
    const url = await this.generateUrl();
    const result = this.http.get(url).subscribe(data => console.log(data));
    return result;
  }

  async generateUrl(): Promise<string> {
    return `http://api.marketstack.com/v1/intraday/latest?access_key=${environment.apiKeyStockData}&symbols=${await this.getPositions()}`;
  }

  async getPositions(): Promise<string> {
    return this.portfolioService.getPortfolio()
      .then(data => {
        let result = '';
        data.forEach((holding, index, reference) => {
        if ((index + 1) < reference.length) {
          result += `${holding.symbol},`
        }
        else {
          result += holding.symbol;
        }});
        return result;
    });
  }
}

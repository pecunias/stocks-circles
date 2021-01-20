import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolio() {
    return new Promise<any>((resolve) => { 
      resolve(    [
      {
        symbol: 'APHA',
        amount: 1033
    },
    {
        symbol: 'GRWG',
        amount: 124
    },
    {
        symbol: 'HEXO',
        amount: 78
    },
    {
        symbol: 'IIPR',
        amount: 20
    },
    {
        symbol: 'VFF',
        amount: 192
    },
    {
        symbol: 'GTBIF',
        amount: 93
    },
    {
        symbol: 'CRLBF',
        amount: 315
    },
    ])
  });
  }
}

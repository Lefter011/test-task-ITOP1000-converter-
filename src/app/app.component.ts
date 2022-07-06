import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-task-itop1000';

  
  // rateUSD = '--.--';
  // rateEUR = '--.--';

  // inputAmount: number = 0;
  // resultAmount: number = 0;

  // fromCurrency: string = 'UAH';
  // toCurrency: string = 'USD';

  // OnInputCurrencyChange(value: string): void {
  //   this.fromCurrency = value;
  // }
  // OnResultCurrencyChange(value: string): void {
  //   this.toCurrency = value;
  // }


  // calculate(val: number, fromCurrency:string, toCurrency: string): number {
  //   let result = 0;
  //   if (fromCurrency == 'EUR')
  //   {
  //     if (toCurrency == "EUR")
  //     {
  //       result = val;
  //     } else if (toCurrency == "USD")
  //     {
  //       result = (val * +this.rateEUR) / +this.rateUSD;
  //     } else if (toCurrency == "UAH")
  //     {
  //       result = val * +this.rateEUR;
  //     }
  //   }
  //   else if (fromCurrency == 'USD')
  //   {
  //     if (toCurrency == "USD")
  //     {
  //       result = val;
  //     } else if (toCurrency == "EUR")
  //     {
  //       result = (val * +this.rateUSD) / +this.rateEUR;
  //     } else if (toCurrency == "UAH")
  //     {
  //       result = val * +this.rateUSD;
  //     }
  //   }
  //   else if (fromCurrency == 'UAH')
  //   {
  //     if (toCurrency == "UAH")
  //     {
  //       result = val;
  //     }
  //     else if (toCurrency == "EUR")
  //     {
  //       result = val * +this.rateEUR;
  //     }
  //     else if (toCurrency == "USD")
  //     {
  //       result = val * +this.rateUSD;
  //     }
  //   }
  //   return result;
  // }

  // OnInputAmountChange(value: string): void {
  //   this.inputAmount = +value;
  //   this.resultAmount = this.calculate(+value, this.fromCurrency, this.toCurrency);
  // }

  // OnResultAmountChange(value: string): void {
  //   this.resultAmount = +value;
  //   this.inputAmount = this.calculate(+value, this.fromCurrency, this.toCurrency);
  // }


  // async ngOnInit(): Promise<void> {
  //   interface Rates {
  //     USD: number;
  //     EUR: number;
  //   }

  //   interface ResponseJSON {
  //     r030: number;
  //     txt: string;
  //     rate: number;
  //     cc: string;
  //     exchangedate: string;
  //   }
    
  //   const rates = {} as Rates;

  //   const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  //   const result = await response.json() as ResponseJSON[];

  //   for (let i = 0; i < result.length; i++) {
  //     if (result[i].cc === 'USD') {
  //       rates.USD = result[i].rate;
  //     } else if (result[i].cc === 'EUR') {
  //       rates.EUR = result[i].rate;
  //     }
  //   }

  //   this.rateUSD = rates.USD.toFixed(2);
  //   this.rateEUR = rates.EUR.toFixed(2); 
  // }

  
}

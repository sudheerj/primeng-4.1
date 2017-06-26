import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {CountryService} from '../../service/countryservice';

@Component({
  selector: 'section',
  templateUrl: 'autocompletedemo.component.html',
})
export class AutocompleteDemoComponent {
  msgs: Message[] = [];
  activeIndex: number = 0;
  country: any;

  countries: any[];

  filteredCountriesSingle: any[];


  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredBrands: any[];

  brand: string;

  constructor(private countryService: CountryService) {
  }

  filterCountrySingle(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
      this.filteredCountriesSingle = this.filterCountry(query, countries);
    });
  }

  filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }


  onClear(event: any) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'The cleared input is ' + event});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}

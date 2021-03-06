import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pessoaFisica'
})
export class PessoaFisicaPipe implements PipeTransform {

  transform(value: string): string {
    return  value.substring(0,3) + '.' +
    value.substring(3,6) + '.' +
    value.substring(6,9) + '-' +
    value.substring(9,11);
  }

}

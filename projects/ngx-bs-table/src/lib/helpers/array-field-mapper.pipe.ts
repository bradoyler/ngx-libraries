import { Pipe, PipeTransform } from '@angular/core';

/*
 * maps a field from a collection to an array of strings
 * Takes an array of objects
 * Usage:
 *   array | arrayFieldMapper:'fieldName'
 * Example:
 *   {{ assignments | arrayFieldMapper:'productName' }}
 *   formats to: CoPilot, MileOn
*/

@Pipe({name: 'arrayFieldMapper'})
export class ArrayFieldMapperPipe implements PipeTransform {
  transform(values: any[], field: string): string[] {
    if (values && values.length) {
      return values.slice(0, 99).map(a => ' ' + a[field]);
    }
    return [''];
  }
}

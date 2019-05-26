import { Pipe, PipeTransform } from '@angular/core';

/*
 * maps a field from a collection to an array of strings
 * Takes an array of objects
 * Usage:
 *   string | truncateString:32
 * Example:
 *   {{ 'mystring' | truncateString:6 }}
 *   formats to: mystri...
*/

@Pipe({name: 'truncateString'})
export class TruncateStringPipe implements PipeTransform {
  transform(value: string, limit = 30): string {
    if (value && value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}

import { format } from 'date-fns';

export const regExpDate = /^[0-9]{2}[.][0-9]{2}[.][0-9]{4}$/g;

export function datePrevalidator(newValue: Date | null): string {
  return newValue && regExpDate.test(newValue.toLocaleDateString())
    ? format(newValue, 'yyyy-MM-dd')
    : '';
}

import {
  grayColor,
  blueColor,
  loadColor,
  errColor,
} from 'assets/styles/colors';
import { Priority, PriorityParams } from 'types/utils/constantsTypes';

export const priority: Priority = {
  normal: {
    id: 1,
    title: 'Normal',
    value: 'normal',
    color: grayColor,
  },
  important: {
    id: 2,
    title: 'Important',
    value: 'important',
    color: blueColor,
  },
  urgent: {
    id: 3,
    title: 'Urgent',
    value: 'urgent',
    color: loadColor,
  },
  critical: {
    id: 4,
    title: 'Critical',
    value: 'critical',
    color: errColor,
  },
};

export const priorityParams: PriorityParams[] = [
  {
    id: 1,
    title: 'Normal',
    value: 'normal',
    color: grayColor,
  },
  {
    id: 2,
    title: 'Important',
    value: 'important',
    color: blueColor,
  },
  {
    id: 3,
    title: 'Urgent',
    value: 'urgent',
    color: loadColor,
  },
  {
    id: 4,
    title: 'Critical',
    value: 'critical',
    color: errColor,
  },
];

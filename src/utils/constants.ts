import {
  grayColor,
  blueColor,
  loadColor,
  errColor,
} from 'assets/styles/colors';
import { Tasks, Priority, PriorityParams } from 'typings/utils/constants';

export const tasksDefault: Tasks[] = [
  {
    uuid: '01',
    date: '2023-01-07',
    tasks: [
      {
        id: '2023-01-07-01',
        priority: 'normal',
        title: 'Visit David',
        description: 'Lorem Ipsum Dolor Sit met',
        done: false,
      },
      {
        id: '2023-01-07-02',
        priority: 'important',
        title: 'Goceries For Dinner',
        description: 'Lorem Ipsum Dolor Sit met',
        done: true,
      },
      {
        id: '2023-01-07-03',
        priority: 'urgent',
        title: 'Fix Dad’s iPad',
        description: 'Lorem Ipsum Dolor Sit met',
        done: false,
      },
      {
        id: '2023-01-07-03',
        priority: 'critical',
        title: 'None',
        description: 'Lorem Ipsum Dolor Sit met',
        done: false,
      },
    ],
  },
  {
    uuid: '02',
    date: '2023-01-08',
    tasks: [
      {
        id: '2023-01-08-01',
        priority: 'normal',
        title: 'Visit David',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
      {
        id: '2023-01-08-02',
        priority: 'important',
        title: 'Goceries For Dinner',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
      {
        id: '2023-01-08-03',
        priority: 'urgent',
        title: 'Fix Dad’s iPad',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
    ],
  },
  {
    uuid: '03',
    date: '2023-01-09',
    tasks: [
      {
        id: '2023-01-09-01',
        priority: 'normal',
        title: 'Visit David',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
      {
        id: '2023-01-09-02',
        priority: 'important',
        title: 'Goceries For Dinner',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
      {
        id: '2023-01-09-03',
        priority: 'urgent',
        title: 'Fix Dad’s iPad',
        description: 'Lorem Ipsum Dolor Sit met...',
        done: false,
      },
    ],
  },
];

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

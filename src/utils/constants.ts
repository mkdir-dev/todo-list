import {
  grayColor,
  blueColor,
  loadColor,
  errColor,
} from 'assets/styles/colors';

export interface Task {
  id: string;
  priority: 'normal' | 'important' | 'urgent' | 'critical';
  title: string;
  description: string;
  done: boolean;
}

export interface Tasks {
  uuid: string;
  date: string;
  tasks: Task[];
}

export interface PriorityParams {
  id: number;
  title: 'normal' | 'important' | 'urgent' | 'critical';
  value: 'normal' | 'important' | 'urgent' | 'critical';
  color: string;
}

export interface Priority {
  normal: PriorityParams;
  important: PriorityParams;
  urgent: PriorityParams;
  critical: PriorityParams;
}

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
    title: 'normal',
    value: 'normal',
    color: grayColor,
  },
  important: {
    id: 2,
    title: 'important',
    value: 'important',
    color: blueColor,
  },
  urgent: {
    id: 3,
    title: 'urgent',
    value: 'urgent',
    color: loadColor,
  },
  critical: {
    id: 4,
    title: 'critical',
    value: 'critical',
    color: errColor,
  },
};

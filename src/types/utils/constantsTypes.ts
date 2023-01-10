export interface Task {
  id: string;
  date: string;
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
  title: 'Normal' | 'Important' | 'Urgent' | 'Critical';
  value: 'normal' | 'important' | 'urgent' | 'critical';
  color: string;
}

export interface Priority {
  normal: PriorityParams;
  important: PriorityParams;
  urgent: PriorityParams;
  critical: PriorityParams;
}

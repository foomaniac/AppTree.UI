import { Dependency } from './dependency';

export interface Application {
  id: number;
  name: string;
  summary: string;
  repository: string;
  type: string;
  dependencies: Dependency[];
}

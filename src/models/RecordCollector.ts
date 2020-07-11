import { ResolvedNode, ResolvedLink } from 'resolved-graph'
import { Record } from './Record'
export class RecordCollector {
  record: Record

  constructor() {
    this.record = {}
  }

  save(alias: string, value: ResolvedNode | ResolvedLink) {
    if (!alias) return
    if (!this.record[alias]) {
      this.record[alias] = [value]
    } else if (!this.record[alias].includes(value)) {
      this.record[alias].push(value)
    }
  }
}

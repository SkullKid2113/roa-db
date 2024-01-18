import {Rule} from "../../entity/rule";

export interface RuleService {
    find(ruleMatch: Rule): Promise<Rule[]>;
    upsert(rule: Rule): Promise<Rule>;
    delete(id: number): Promise<void>;
}

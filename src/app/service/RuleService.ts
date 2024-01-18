import {Rules} from "../../entity/rules";

interface RuleService {
    find(ruleMatch: Rules): Promise<Rules[]>;
    upsert(rule: Rules): Promise<Rules>;
    delete(id: number): Promise<void>;
}

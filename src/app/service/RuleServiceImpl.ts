import { Rule } from "../../entity/rule";
import {RuleService} from "./RuleService";

class RuleServiceImpl implements RuleService {
    find(ruleMatch: Rule): Promise<Rule[]> {
        throw new Error("Method not implemented.");
    }
    upsert(rule: Rule): Promise<Rule> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

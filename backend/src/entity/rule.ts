import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: "rules"})
export class Rule {

  @PrimaryColumn("uuid")
  id: number

  @Column()
  rule: string

  @Column()
  episode: string
}

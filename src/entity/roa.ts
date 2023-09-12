import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export class Rule {

  @PrimaryColumn()
  id: string

  @Column()
  rule: number

  @Column()
  description: string

  @Column()
  episode: string
}

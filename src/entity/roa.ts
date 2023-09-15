import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export class Rules {

  @PrimaryColumn("uuid")
  id: number

  @Column()
  rule: number

  @Column()
  description: string

  @Column()
  episode: string
}

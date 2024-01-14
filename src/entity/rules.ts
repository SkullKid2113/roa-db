import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Rules {

  @PrimaryColumn("uuid")
  id: number

  @Column()
  rule: string

  @Column()
  episode: string
}

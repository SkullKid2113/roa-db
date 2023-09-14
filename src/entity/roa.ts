import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export class Rules {

  @PrimaryColumn()
  id: number

  @Column()
  rule: number

  @Column()
  description: string

  @Column()
  episode: string
}

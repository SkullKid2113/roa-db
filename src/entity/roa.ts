import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    rules: int

    @Column()
    description: string

    @Column()
    episode: string
}
  
    export default User;
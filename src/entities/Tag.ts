import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Compliment } from "./Compliment";

import { Expose } from "class-transformer";

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @OneToMany(() => Compliment, (compliment) => compliment.tag)
  compliments: Compliment[];

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "nameCustom" })
  nameCustom(): string {
    return `#${this.name}`;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tag };

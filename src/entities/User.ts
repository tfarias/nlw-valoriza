import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import { Compliment } from "./Compliment";
import { Exclude } from "class-transformer";
@Entity("users")
class User {
  @Exclude()
  private tempPassword: string;
  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => Compliment, (compliment) => compliment.userReceiver)
  complimentReceiver: Compliment[];

  @OneToMany(() => Compliment, (compliment) => compliment.userSender)
  complimentSender: Compliment[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    const hash: any = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }

  @BeforeUpdate()
  async updatePassword() {
    if (!bcrypt.compare(this.password, this.tempPassword)) {
      const hash: any = await bcrypt.hash(this.password, 10);
      this.password = hash;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

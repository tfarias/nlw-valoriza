import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

@Entity("users")
class User {
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

  @Column()
  password: string;

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

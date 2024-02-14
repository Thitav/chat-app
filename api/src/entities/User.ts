import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  AfterLoad,
  BeforeUpdate,
  BeforeInsert
} from 'typeorm'
import { IsNotEmpty, IsString, IsEmail } from 'class-validator'
import { v4 as uuid } from 'uuid'
import { createHash } from 'crypto'
import { Exclude } from 'class-transformer'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Column()
  @Exclude()
  @IsString()
  @IsNotEmpty()
  password: string

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  username: string

  @CreateDateColumn({ name: 'created_at' })
  // @IsDate()
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  // @IsDate()
  updatedAt: Date

  @Exclude()
  private lastPassword: string

  @AfterLoad()
  private saveLastPassword(): void {
    this.lastPassword = this.password
  }

  @BeforeInsert()
  @BeforeUpdate()
  private hashPassword(): void {
    if (this.lastPassword !== this.password) {
      this.password = createHash('sha256').update(this.password).digest('hex')
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export default User

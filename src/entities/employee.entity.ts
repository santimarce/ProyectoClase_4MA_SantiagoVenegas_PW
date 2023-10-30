import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('employee', { schema: 'empleados' })

export class EmployeeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAT: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAT: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAT: Date;

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'employee name'
    })
    name: string;

    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'employee address'
    })
    address: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'employee email'
    })
    email: string;

    @Column('varchar', {
        name: 'phone',
        nullable: false,
        comment: 'employee phone'
    })
    phone: string;

    @BeforeInsert()
    @BeforeUpdate()
    async setName() {
        if (!this.name) {
            return;
        }
        this.name = this.name.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setAddress() {
        if (!this.address) {
            return;
        }
        this.address = this.address.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setEmail() {
        if (!this.email) {
            return;
        }
        this.email = this.email.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setPhone() {
        if (!this.phone) {
            return;
        }
        this.phone = this.phone.toUpperCase();
    }
}
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products', {schema: 'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @Column('varchar',{
        name: 'title',
        nullable: false,
        comment: 'product title'
    })
    title: string;
    @Column('number',{
        name: 'price',
        nullable: false,
        comment: 'product price'
    })
    price: number;
    @Column('varchar',{
        name: 'description',
        nullable: true,
        comment: 'product description'
    })
    description: string;
    @Column('varchar',{
        name: 'imagen',
        nullable: false,
        comment: 'product image'
    })
    image: string;
    
    @BeforeInsert()
    @BeforeUpdate()
    async setTitle(){
        if(!this.title){
            return;
        } 
        this.title = this.title.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDescription(){
        if(!this.description){
            return;
        } 
        this.description = this.description.toLocaleLowerCase();
    }

    /* 
    @BeforeInsert()
    @BeforeUpdate()
    async setEmail(){
        if(!this.email){
            return;
        } 
        this.email = this.email.toLocaleLowerCase().trim();
    }
    

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.password){
            return;
        } 
        this.password = Bcrypt.hash(this.password, 12);
    } 
    */
    

}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


/*
* entity или model это представление таблицы БД в орм
* синтаксис аналогичен созданию инстанса класса
*/
@Entity({ name: 'tags' }) // <-- указываем имя таблицы
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

export class Item {
    id: string;
    value?: Nullable<string>;
}

export abstract class IQuery {
    abstract items(): Item[] | Promise<Item[]>;

    abstract item(id: string): Nullable<Item> | Promise<Nullable<Item>>;
}

export abstract class IMutation {
    abstract createItem(): string | Promise<string>;

    abstract updateItem(id: string, value?: Nullable<string>): boolean | Promise<boolean>;

    abstract deleteItem(id: string): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;

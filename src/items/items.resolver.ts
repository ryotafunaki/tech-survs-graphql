// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CacheService } from '../common/cache';
import { Item } from '../graphql.schema';
import ItemService from './items.service';

@Resolver('Item')
class ItemResolver {
  constructor(
    private readonly service: ItemService,
    private readonly cacheService: CacheService,
  ) {}

  @Query(() => Array<Item>, { name: 'items' })
  async getItemList(): Promise<Item[]> {
    let items: Item[];
    const keyPrefix = `test:`;
    items = await this.cacheService.getList(keyPrefix);
    if (items.length < 1) {
      items = await this.service.findAll(keyPrefix);
    }
    return items;
  }

  @Query(() => Item, { name: 'item', nullable: true })
  async getItemById(@Args('id') id: string): Promise<Item> | null {
    let item: Item | null;
    const key = `test:${id}`;
    item = await this.cacheService.get(key);
    if (item === null) {
      item = await this.service.findById(id);
    }
    return item;
  }

  @Mutation(() => Boolean, { name: 'createItem' })
  async createItem(): Promise<string | null> {
    const id = await this.service.createItem();
    const item = {
      id: id,
    };
    const key = `test:${id}`;
    await this.cacheService.set(key, item);
    return id;
  }

  @Mutation(() => Boolean, { name: 'updateItem' })
  async updateItem(
    @Args('id') id: string,
    @Args('value') value?: string,
  ): Promise<boolean> {
    const item = {
      id: id,
      value: value,
    };
    const success = await this.service.updateItem(id, item);
    if (success) {
      const key = `test:${id}`;
      await this.cacheService.set(key, item);
    }
    return success;
  }

  @Mutation(() => Boolean, { name: 'deleteItem' })
  async deleteItem(@Args('id') id: string): Promise<boolean> {
    const success = this.service.deleteItem(id);
    if (success) {
      const key = `test:${id}`;
      await this.cacheService.delete(key);
    }
    return success;
  }
}
export default ItemResolver;

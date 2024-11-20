// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Injectable } from '@nestjs/common';
import { Item } from '../graphql.schema';

@Injectable()
export class ItemService {
  async createItem(): Promise<string> {
    const id = crypto.randomUUID();
    return id;
  }

  async updateItem(id: string, value?: Item): Promise<boolean> {
    return true;
  }

  async deleteItem(id: string): Promise<boolean> {
    return true;
  }

  async findAll(keyPrefix: string): Promise<Item[]> {
    return [];
  }

  async findById(id: string): Promise<Item | null> {
    return null;
  }
}
export default ItemService;

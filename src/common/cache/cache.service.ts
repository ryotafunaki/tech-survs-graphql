// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Inject, Injectable } from '@nestjs/common';
import { NodeRedisClientType } from '../node-redis';

@Injectable()
export class CacheService {
  constructor(@Inject('NODE_REDIS') private client: NodeRedisClientType) {}

  async get(key: string): Promise<any | null> {
    let items = await this.client.hGetAll(key);
    items = Object.keys(items).length === 0 ? null : items;
    return items;
  }

  async getList(keyPrefix: string): Promise<any[]> {
    const keys = await this.client.keys(`${keyPrefix}*`);
    if (keys.length < 1) {
      return [];
    }
    const values = [];
    for (const key of keys) {
      const value = await this.client.hGetAll(key);
      values.push(value);
    }
    return values;
  }

  async set(key: string, value: any): Promise<void> {
    await this.client.hSet(key, value);
  }

  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }
}
export default CacheService;

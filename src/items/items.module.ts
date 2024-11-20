// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Module } from '@nestjs/common';
import { CacheModule } from '../common/cache';
import ItemResolver from './items.resolver';
import ItemService from './items.service';

@Module({
  imports: [CacheModule],
  providers: [ItemResolver, ItemService],
})
class ItemModule {}
export default ItemModule;

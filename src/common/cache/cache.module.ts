// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Module } from '@nestjs/common';
import { NodeRedisModule } from '../node-redis';
import CacheService from './cache.service';

@Module({
  imports: [NodeRedisModule],
  providers: [CacheService],
  exports: [CacheService],
})
class CacheModule {}
export default CacheModule;

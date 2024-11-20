// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { Module } from '@nestjs/common';
import nodeRedisFactory from './node-redis.factory';

@Module({
  providers: [nodeRedisFactory],
  exports: [nodeRedisFactory],
})
class NodeRedisModule {}
export default NodeRedisModule;

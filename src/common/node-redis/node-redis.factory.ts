// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

type NodeRedisClientType = ReturnType<typeof createClient>
const nodeRedisClientFactory: FactoryProvider<NodeRedisClientType> = {
  provide: 'NODE_REDIS',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const config = configService.get('cache');
    const client = createClient({
      socket: {
        host: config.host,
        port: config.port,
      },
    });
    client.connect();
    return client;
  },
};
export { NodeRedisClientType };
export default nodeRedisClientFactory;

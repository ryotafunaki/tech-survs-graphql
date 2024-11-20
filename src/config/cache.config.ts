// Copyright (c) 2024 RFull Development
// This source code is managed under the MIT license. See LICENSE in the project root.
import { registerAs } from '@nestjs/config';

export const cacheConfig = registerAs('cache', () => ({
  host: process.env.CACHE_HOST,
  port: parseInt(process.env.CACHE_PORT),
}));
export default cacheConfig;

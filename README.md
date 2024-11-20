# GraphQL Technical Survey Repository

This repository is a technical survey of the GraphQL.

## Overview

## Requirements

- Node.js 20.x

## How to use

### Execution on local machine

1. Set the environment variables or create the '.env' file

   | Name       | Description                             | Value |
   | ---------- | --------------------------------------- | ----- |
   | CACHE_HOST | The host name or IP of the cache server | redis |
   | CACHE_PORT | The port number of the cache server     | 6379  |

1. Install the dependencies

   ```bash
   yarn install
   ```

1. Start the application with development mode

   ```bash
   yarn run start:dev
   ```

1. Accessing http://localhost:3000/graphql
1. Execute the following queries and mutations on the GraphQL playground

   ```graphql
   mutation NewItem {
     createItem
   }

   query ItemList {
     items {
       id
       value
     }
   }
   ```

## How to maintain

### Modify the GraphQL schema

1. Modify the 'src/\*_/_.graphql' files
1. Regenerate the 'src/graphql.schema.ts' file
   ```bash
   yarn run generate
   ```

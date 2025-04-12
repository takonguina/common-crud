# Common CRUD Module

This project includes a `Common CRUD` module designed to simplify the implementation of basic Create, Read, Update, and Delete (CRUD) operations in a NestJS application.

## Features

- **Common Module**: Provides reusable CRUD services and controllers.
- **Abstract Controller**: A generic `CrudController` to handle CRUD operations for any entity.
- **Service Layer**: A `CommonCrudService` to manage data operations.

## Project Setup

```bash
# Install dependencies
$ npm install
```

## Usage

1. **Import the `CommonModule`** into your feature module.
2. **Extend the `CrudController`** in your custom controllers to inherit CRUD functionality.
3. **Leverage the `CommonCrudService`** for data management.

## Example

```typescript
// Example of extending CrudController
import { Controller } from '@nestjs/common';
import { CrudController } from './common/crud.controller';
import { CommonCrudService } from './common/common-crud.service';

@Controller('example')
export class ExampleController extends CrudController<ExampleEntity> {
  constructor(protected readonly service: CommonCrudService<ExampleEntity>) {
    super(service);
  }
}
```

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).

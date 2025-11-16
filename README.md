# KLive Shared Package

Package chứa các utilities, enums, và constants dùng chung giữa Frontend và Backend của KLive.

## Cài đặt

### Cài đặt từ GitHub Private Repository

Thêm package vào `package.json` của FE hoặc BE:

```json
{
  "dependencies": {
    "@klive/shared": "github:YOUR_GITHUB_USERNAME/KLive-Shared#main"
  }
}
```

Hoặc sử dụng pnpm:

```bash
pnpm add @klive/shared@github:YOUR_GITHUB_USERNAME/KLive-Shared#main
```

### Cấu hình Authentication cho GitHub Private Repo

#### Option 1: Sử dụng Personal Access Token (PAT)

1. Tạo Personal Access Token trên GitHub với quyền `repo`
2. Thêm vào `.npmrc` hoặc `.yarnrc` trong project FE/BE:

```
@klive:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

#### Option 2: Sử dụng SSH (khuyến nghị)

Thay đổi URL trong `package.json`:

```json
{
  "dependencies": {
    "@klive/shared": "git+ssh://git@github.com/YOUR_GITHUB_USERNAME/KLive-Shared.git#main"
  }
}
```

#### Option 3: Sử dụng GitHub Packages

Nếu publish lên GitHub Packages, cấu hình `.npmrc`:

```
@klive:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Development

### Build

```bash
pnpm install
pnpm build
```

### Watch mode

```bash
pnpm build:watch
```

## Cấu trúc thư mục

```
KLive-Shared/
├── src/
│   ├── enums/          # Các enum dùng chung
│   │   └── index.ts
│   ├── constants/      # Các constant dùng chung
│   │   └── index.ts
│   ├── utils/          # Các utility functions
│   │   └── index.ts
│   └── index.ts        # Main export file
├── dist/               # Build output (git ignored)
├── package.json
├── tsconfig.json
└── README.md
```

## Sử dụng

Sau khi cài đặt, import trong code:

```typescript
// Import tất cả
import { SomeEnum, SomeConstant, someUtil } from "@klive/shared";

// Hoặc import riêng lẻ
import { SomeEnum } from "@klive/shared/enums";
import { SomeConstant } from "@klive/shared/constants";
import { someUtil } from "@klive/shared/utils";
```

## Thêm nội dung mới

### Thêm Enum

1. Tạo file mới trong `src/enums/`, ví dụ: `user-role.enum.ts`
2. Export từ `src/enums/index.ts`:

```typescript
// src/enums/user-role.enum.ts
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

// src/enums/index.ts
export * from "./user-role.enum";
```

### Thêm Constant

1. Tạo file mới trong `src/constants/`, ví dụ: `api.constants.ts`
2. Export từ `src/constants/index.ts`:

```typescript
// src/constants/api.constants.ts
export const API_ENDPOINTS = {
  USERS: "/api/users",
  AUTH: "/api/auth",
} as const;

// src/constants/index.ts
export * from "./api.constants";
```

### Thêm Utility Function

1. Tạo file mới trong `src/utils/`, ví dụ: `string.utils.ts`
2. Export từ `src/utils/index.ts`:

```typescript
// src/utils/string.utils.ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// src/utils/index.ts
export * from "./string.utils";
```

## Versioning

Khi có thay đổi, cập nhật version trong `package.json` và commit. FE/BE cần cập nhật version trong `package.json` để nhận thay đổi mới.

## Lưu ý

- Package này chỉ chứa code TypeScript/JavaScript thuần, không có dependencies runtime
- Tất cả code phải tương thích với cả FE (Next.js) và BE (NestJS)
- Tránh import các thư viện chỉ dùng cho FE hoặc BE

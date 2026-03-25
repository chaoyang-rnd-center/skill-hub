# Skill Hub - 架构设计文档

**版本**: 1.0  
**日期**: 2026-03-25  
**负责人**: Xavier (Director)

---

## 1. 架构概览

### 1.1 架构图

```
┌─────────────────────────────────────────────────────────┐
│                      Next.js App                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Layout    │  │    Page     │  │   Components    │  │
│  │  (Header)   │  │   (Home)    │  │  (SkillCard)    │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              State Management                    │   │
│  │  (React useState + useMemo for filtering)       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Data Layer                          │   │
│  │  (Static Data → API → Database)                 │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 2. 组件架构

### 2.1 组件层次

```
App (Layout)
└── Home (Page)
    ├── Header
    ├── Hero Section
    ├── Skills Section
    │   ├── SearchFilter
    │   │   ├── Input (Search)
    │   │   ├── Select (Sort)
    │   │   └── Category Pills
    │   └── SkillGrid
    │       └── SkillCard[]
    └── Footer
```

### 2.2 组件职责

| 组件 | 职责 | Props |
|------|------|-------|
| Header | 导航、Logo、外部链接 | - |
| Hero | 展示标语、统计、CTA | - |
| SearchFilter | 搜索、筛选、排序 | searchQuery, onSearchChange, selectedCategory, onCategoryChange, sortBy, onSortChange, resultCount |
| SkillCard | 展示单个 Skill 信息 | skill: Skill |
| Footer | 版权、链接 | - |

---

## 3. 数据流

### 3.1 当前数据流 (MVP)

```
[User Input] 
    ↓
[Home Component] → useState for filters
    ↓
[useMemo] → filter + sort skills
    ↓
[SkillCard[]] → render
```

### 3.2 未来数据流 (v1.1)

```
[User Input]
    ↓
[Zustand Store] → global state
    ↓
[API Client] → fetch from backend
    ↓
[React Query] → caching + refetch
    ↓
[Components] → render
```

---

## 4. 性能优化策略

### 4.1 当前优化
- ✅ `useMemo` 用于筛选/排序计算
- ✅ 组件懒加载准备 (next/dynamic)
- ✅ 图片优化 (next/image)
- ✅ CSS 优化 (Tailwind purging)

### 4.2 计划优化
- [ ] React.memo for SkillCard
- [ ] 虚拟滚动 (react-window) for large lists
- [ ] 代码分割
- [ ] Service Worker 缓存

---

## 5. 状态管理决策

### 5.1 为什么不用 Redux/Zustand (MVP)
- 状态简单，只有 filters
- 不需要跨组件共享复杂状态
- useState + useMemo 足够

### 5.2 何时引入状态管理 (v1.1)
- 用户认证状态
- 购物车/收藏夹
- 全局通知
- API 缓存

---

## 6. 测试策略

### 6.1 测试金字塔

```
       /\
      /  \
     / E2E \      (Playwright - 关键流程)
    /--------\
   /  Integration \  (组件交互)
  /----------------\
 /    Unit Tests     \ (Vitest + React Testing Library)
/----------------------\
```

### 6.2 测试覆盖目标

| 类型 | 覆盖率目标 | 工具 |
|------|-----------|------|
| 单元测试 | 80% | Vitest |
| 集成测试 | 60% | Vitest |
| E2E 测试 | 核心流程 | Playwright |

---

## 7. 技术债务记录

| 问题 | 严重度 | 计划修复 |
|------|--------|----------|
| 静态数据 | 中 | v1.1 接入 API |
| 无错误边界 | 中 | v0.9 添加 |
| 无类型检查 CI | 低 | v0.9 添加 |

---

## 8. 扩展性考虑

### 8.1 新增 Skill 来源
当前: 静态 TS 文件  
未来: 
1. JSON API
2. GraphQL
3. Server Components 直接查询 DB

### 8.2 新增功能扩展点
- Skill 详情页: `/skills/[id]`
- 用户中心: `/profile`
- 提交页面: `/submit`
- 管理后台: `/admin`

---

## 9. 代码规范

### 9.1 文件组织
```
src/
├── app/           # Next.js App Router
├── components/    # React 组件
│   ├── ui/        # 基础 UI 组件
│   └── *.tsx      # 业务组件
├── lib/           # 工具函数
├── types/         # TypeScript 类型
├── data/          # 静态数据
└── hooks/         # 自定义 Hooks (待创建)
```

### 9.2 命名规范
- 组件: PascalCase (e.g., `SkillCard.tsx`)
- 工具函数: camelCase (e.g., `formatNumber.ts`)
- 类型: PascalCase (e.g., `Skill.ts`)
- 常量: UPPER_SNAKE_CASE

---

## 10. 部署架构

### 10.1 推荐方案
**Vercel** (首选)
- 原生 Next.js 支持
- 自动 HTTPS
- CDN 边缘部署
- Serverless Functions

### 10.2 备选方案
- Cloudflare Pages
- Netlify
- AWS Amplify

---

## 11. 安全考虑

### 11.1 当前措施
- 外部链接使用 `rel="noopener noreferrer"`
- 无敏感数据存储

### 11.2 未来加强
- CSP (Content Security Policy)
- 输入验证 (提交表单时)
- 速率限制 (API)

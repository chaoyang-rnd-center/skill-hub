# Skill Hub - 产品需求文档 (PRD)

**版本**: 1.0  
**日期**: 2026-03-25  
**负责人**: Xavier (Director)

---

## 1. 项目概述

### 1.1 目标
创建一个 Skill Hub 平台，用于统一管理、展示和分享 Agent Skills。

### 1.2 核心价值
- **发现**: 浏览社区创建的 Skills
- **安装**: 一键复制安装命令
- **分享**: 提交自己的 Skills 到平台

### 1.3 参考产品
- [ClawHub](https://clawhub.ai/skills)
- [腾讯 SkillHub](https://skillhub.tencent.com/)
- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)

---

## 2. 用户故事

### 2.1 作为 Skill 使用者
- [x] US-001: 我可以浏览所有可用的 Skills
- [x] US-002: 我可以按分类筛选 Skills
- [x] US-003: 我可以搜索 Skills（按名称/描述/标签）
- [x] US-004: 我可以按下载量/Stars/更新时间排序
- [x] US-005: 我可以复制安装命令
- [ ] US-006: 我可以查看 Skill 详情页
- [ ] US-007: 我可以给 Skill 打分/收藏

### 2.2 作为 Skill 作者
- [ ] US-008: 我可以提交新的 Skill
- [ ] US-009: 我可以管理我的 Skills
- [ ] US-010: 我可以查看 Skill 的统计信息

---

## 3. 功能规格

### 3.1 MVP 功能 (已完成)
| 功能 | 优先级 | 状态 |
|------|--------|------|
| Skill 卡片展示 | P0 | ✅ |
| 分类筛选 | P0 | ✅ |
| 搜索功能 | P0 | ✅ |
| 排序功能 | P0 | ✅ |
| 复制安装命令 | P0 | ✅ |
| 响应式设计 | P0 | ✅ |

### 3.2 v1.1 规划功能
| 功能 | 优先级 | 状态 |
|------|--------|------|
| Skill 详情页 | P1 | 🔄 |
| 后端 API 集成 | P1 | 🔄 |
| 用户认证 | P1 | 🔄 |
| Skill 提交表单 | P2 | ⏳ |
| 评分系统 | P2 | ⏳ |

---

## 4. 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 框架 | Next.js | 16.x |
| 语言 | TypeScript | 5.x |
| 样式 | Tailwind CSS | 4.x |
| UI 库 | shadcn/ui | - |
| 图标 | lucide-react | - |
| 测试 | Vitest | - |

---

## 5. 设计规范

### 5.1 设计系统
采用 Calcite Design System 规范：
- 主色调: #007AC2 (Calcite Blue)
- 边框: hsl(210,16%,90%)
- 圆角: 0.25rem
- 字体: 系统字体栈

### 5.2 响应式断点
| 断点 | 宽度 | 布局 |
|------|------|------|
| sm | 640px | 单列 |
| md | 768px | 2 列 |
| lg | 1024px | 3 列 |
| xl | 1280px | 4 列 |

---

## 6. 数据结构

```typescript
interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  installUrl: string;
  installPrompt: string;
  downloads: number;
  stars: number;
  updatedAt: string;
  tags: string[];
}
```

---

## 7. 验收标准

### 7.1 功能验收
- [x] 页面加载时间 < 3s
- [x] 搜索响应 < 100ms
- [x] 所有交互功能正常
- [x] 移动端适配良好

### 7.2 代码质量
- [ ] 测试覆盖率 > 80%
- [ ] Lighthouse 评分 > 90
- [ ] 无 TypeScript 错误
- [ ] ESLint 检查通过

---

## 8. 里程碑

| 阶段 | 日期 | 交付物 |
|------|------|--------|
| MVP | 2026-03-26 | 可运行的初稿 |
| v0.9 | 2026-03-28 | 完整测试覆盖 |
| v1.0 | 2026-04-01 | 生产就绪 |

---

## 9. 风险与对策

| 风险 | 影响 | 对策 |
|------|------|------|
| 后端未就绪 | 高 | 先使用静态数据 |
| 测试时间不足 | 中 | 优先级排序，先核心后边缘 |
| 设计调整 | 低 | 使用组件库，易于调整 |

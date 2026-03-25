# Task Contract: Apply Team Workflow to Skill Hub

**任务**: 将新建立的团队工作流机制应用到 Skill Hub 项目  
**创建日期**: 2026-03-25  
**执行者**: Xavier (Director)  
**审查者**: Joe (Director/Reviewer)

---

## 背景

之前的 Skill Hub 开发存在以下问题：
- 我 (Xavier) 一人完成了所有角色 (PM/Architect/Dev/Reviewer)
- 没有真正的 Generator-Evaluator 分离
- 没有 Sprint Contract 机制
- 遇到阻塞没有上报，而是默默解决

根据 Anthropic Harness 设计原则，需要进行补救。

---

## 完成标准 (Checklist)

- [x] 更新 AGENTS.md 添加团队工作流规范
- [ ] 创建本 Task Contract 文档
- [ ] 提交 PR 供 Reviewer (Joe) 审查
- [ ] 按审查意见修改
- [ ] 获得批准后合并

---

## 审查要点

请 Joe 审查以下内容：

### 1. AGENTS.md 更新
- [ ] 团队工作流机制是否清晰
- [ ] 角色定义是否合理
- [ ] 阻塞上报规则是否可执行
- [ ] Sprint Contract 模板是否实用

### 2. 当前项目补救方案
- [ ] 承认一人完成的问题
- [ ] 提出通过 PR 审查补救
- [ ] 下次任务按新流程执行

---

## 下次任务执行新流程

以 "添加 Skill 详情页" 为例：

```
1. PM-Agent 编写 PRD
   → Joe Review
   → 修改
   → 批准

2. Architect 设计技术方案
   → Dev-Agent Review (可行性)
   → Joe 批准

3. Dev-Agent 实现
   → Reviewer-Agent 代码审查
   → Joe 最终批准
   → 合并
```

---

## 需要决策

1. **Reviewer-Agent 角色**
   - 选项 A: 你来担任 (PR Review)
   - 选项 B: 指定另一个 subagent
   - 建议: 选项 A，你更了解业务需求

2. **Sprint 周期**
   - 建议: 1-2 天一个 Sprint
   - 每个功能一个 Sprint

3. **阻塞上报方式**
   - 立即 Telegram 消息
   - 还是 GitHub Issue?

---

## 验收标准

- [ ] AGENTS.md 更新已审查通过
- [ ] 团队工作流机制达成共识
- [ ] 下次任务按新流程执行

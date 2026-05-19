const changelogs = [
  {
    id: 1,
    version: "v1.0.0",
    date: "2026-05-18",
    title: "正式上线",
    changes: [
      { type: "feature", text: "精选情报页 - AI 自动筛选高价值内容" },
      { type: "feature", text: "全部信息动态页 - 全量信息流管理" },
      { type: "feature", text: "AI 日报页 - 每日信息汇总" },
      { type: "feature", text: "需求洞察工作台 - 核心分析页面" },
      { type: "feature", text: "洞察结果页 - 结论库沉淀" },
      { type: "feature", text: "策略输出页 - 可执行动作建议" },
      { type: "feature", text: "信息源管理页 - 白名单信源维护" },
      { type: "feature", text: "信源提报页 - 共建信源墙" },
    ],
  },
  {
    id: 2,
    version: "v0.9.0",
    date: "2026-05-10",
    title: "内部测试版",
    changes: [
      { type: "feature", text: "基础信息采集模块" },
      { type: "feature", text: "AI 摘要生成功能" },
      { type: "feature", text: "信息价值评分系统" },
      { type: "bugfix", text: "修复部分 RSS 源抓取失败问题" },
      { type: "improvement", text: "优化信息卡片展示样式" },
    ],
  },
];

export function ChangelogPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">更新日志</h1>
        <p className="text-gray-600">记录 AI Lab 信息洞察系统的功能更新</p>
      </div>

      <div className="space-y-8">
        {changelogs.map((log) => (
          <div key={log.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-lg font-bold text-gray-900">{log.version}</span>
                <span className="text-gray-500 ml-3">{log.date}</span>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                {log.title}
              </span>
            </div>

            <ul className="space-y-2">
              {log.changes.map((change, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                    change.type === "feature" ? "bg-green-100 text-green-700" :
                    change.type === "improvement" ? "bg-blue-100 text-blue-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {change.type === "feature" ? "新" : change.type === "improvement" ? "优" : "修"}
                  </span>
                  <span className="text-gray-700">{change.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
const insightTypes = ["全部", "趋势洞察", "竞品洞察", "AI能力洞察", "内部提效洞察"];
const scenarios = ["全部", "用户侧", "跑男侧", "商户侧", "客服侧", "运营侧", "内部提效"];
const statuses = ["全部", "待确认", "已确认", "已转策略", "继续观察", "暂不跟进"];

const insights = [
  {
    id: 1,
    title: "AI 正在重塑客服质检流程",
    type: "AI 能力洞察",
    source: "酒店行业 AI Agent 案例",
    conclusion: "从接电话和派工单切入...",
    scenarios: "客服侧 / 运营侧",
    strategy: "客服录音自动总结与质检",
    priority: "P0",
    confidence: "中",
    status: "已确认",
  },
  {
    id: 2,
    title: "代码 Agent 正在提效研发流程",
    type: "内部提效洞察",
    source: "开发工具更新",
    conclusion: "研发流程可拆解...",
    scenarios: "AI Lab 内部提效",
    strategy: "研发任务内测",
    priority: "P0",
    confidence: "高",
    status: "已转策略",
  },
];

export function InsightsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">洞察结果</h1>
        <p className="text-gray-600">经过 AI 分析后的可用结论库</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-8 mb-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">12</span>
            <span className="text-sm text-gray-600 ml-2">本周新增洞察</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-red-600">3</span>
            <span className="text-sm text-gray-600 ml-2">P0高优先</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-yellow-600">4</span>
            <span className="text-sm text-gray-600 ml-2">待确认</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-green-600">5</span>
            <span className="text-sm text-gray-600 ml-2">已转策略</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 space-y-4">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">类型:</div>
          <div className="flex flex-wrap gap-2">
            {insightTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  type === "全部"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">场景:</div>
          <div className="flex flex-wrap gap-2">
            {scenarios.map((scenario) => (
              <button
                key={scenario}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  scenario === "全部"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {scenario}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">状态:</div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  status === "全部"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <div key={insight.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-lg mb-2">洞察标题: {insight.title}</h3>

            <div className="space-y-2 mb-4 text-sm">
              <div>
                <span className="text-gray-500">类型:</span>
                <span className="text-gray-700 ml-2">{insight.type}</span>
              </div>
              <div>
                <span className="text-gray-500">来源:</span>
                <span className="text-gray-700 ml-2">{insight.source}</span>
              </div>
              <div>
                <span className="text-gray-500">核心结论:</span>
                <span className="text-gray-700 ml-2">{insight.conclusion}</span>
              </div>
              <div>
                <span className="text-gray-500">UU 场景:</span>
                <span className="text-gray-700 ml-2">{insight.scenarios}</span>
              </div>
              <div>
                <span className="text-gray-500">可借鉴策略:</span>
                <span className="text-gray-700 ml-2">{insight.strategy}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                insight.priority === "P0" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-700"
              }`}>
                优先级: {insight.priority}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                insight.confidence === "高" ? "bg-green-50 text-green-600" :
                insight.confidence === "中" ? "bg-yellow-50 text-yellow-600" :
                "bg-gray-100 text-gray-700"
              }`}>
                置信度: {insight.confidence}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                insight.status === "已转策略" ? "bg-green-50 text-green-600" :
                insight.status === "已确认" ? "bg-blue-50 text-blue-600" :
                "bg-gray-100 text-gray-700"
              }`}>
                {insight.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                查看详情
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                转策略输出
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                继续观察
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

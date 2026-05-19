const strategies = [
  {
    id: 1,
    title: "研发提效工具链内测",
    priority: "优先策略",
    score: 100,
    target: "AI Lab / 工程效率",
    tags: ["模型发布", "Agent", "多模态"],
    uuValue: "用于内部需求拆解、脚本生成...",
    aiLabValue: "沉淀标准开发工具包...",
    action: "选 1 个高频任务做对比...",
    source: "AI 原生搭建指南...",
    owner: "AI Lab 工程 + 平台研发",
  },
  {
    id: 2,
    title: "语音与多模态服务升级",
    priority: "优先策略",
    score: 94,
    target: "骑手 / 客服 / 商家",
    tags: ["Agent", "多模态"],
    uuValue: "用于语音上报...",
    aiLabValue: "积累多模态能力...",
    action: "先做客服质检...",
    source: "酒店 AI Agent...",
    owner: "客服运营 + AI Lab",
  },
];

export function StrategiesPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">策略输出</h1>
        <p className="text-gray-600">把每日 AI 动态转成对 UU 跑腿和 AI Lab 可执行的动作建议</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">本周策略机会</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">高优先动作</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">覆盖业务线:</div>
            <div className="text-sm font-medium">客服 / 运营 / 商家</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">AI Lab 可复用能力:</div>
            <div className="text-sm font-medium">Agent / 评测 / Workflow</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">本周值得推进</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {strategies.map((strategy) => (
          <div key={strategy.id} className="bg-gradient-to-br from-blue-50 to-white rounded-lg border-2 border-blue-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">
                {strategy.priority}
              </span>
              <div className="text-right">
                <div className="text-sm text-gray-500">价值</div>
                <div className="text-3xl font-bold text-blue-600">{strategy.score}</div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{strategy.target}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {strategy.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="font-medium text-gray-700 mb-1">UU 跑腿:</div>
                <div className="text-gray-600">{strategy.uuValue}</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="font-medium text-gray-700 mb-1">AI Lab:</div>
                <div className="text-gray-600">{strategy.aiLabValue}</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="font-medium text-gray-700 mb-1">建议动作:</div>
                <div className="text-gray-600">{strategy.action}</div>
              </div>
              <div>
                <span className="text-gray-500">来源动态:</span>
                <span className="text-gray-700 ml-2">{strategy.source}</span>
              </div>
              <div>
                <span className="text-gray-500">负责人建议:</span>
                <span className="text-gray-700 ml-2">{strategy.owner}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                加入实验池
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                查看实验复盘
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                标记暂缓
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

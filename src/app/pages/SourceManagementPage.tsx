const sourceTypes = ["全部", "竞品官网", "行业媒体", "GitHub", "Hugging Face", "研报"];
const priorities = ["全部", "P0", "P1", "P2"];
const statuses = ["启用", "停用", "失效"];

const sources = [
  {
    id: 1,
    priority: "P0",
    name: "Product Hunt",
    type: "产品洞察",
    difficulty: "中",
    method: "RSS",
    lastFetch: "今日",
    status: "启用",
    insights: 128,
    lowValueRate: "15%",
    failCount: 0,
  },
  {
    id: 2,
    priority: "P0",
    name: "GitHub Blog",
    type: "开源工程",
    difficulty: "低",
    method: "RSS",
    lastFetch: "今日",
    status: "启用",
    insights: 89,
    lowValueRate: "8%",
    failCount: 0,
  },
  {
    id: 3,
    priority: "P1",
    name: "少数派",
    type: "产品洞察",
    difficulty: "低",
    method: "RSS",
    lastFetch: "昨日",
    status: "启用",
    insights: 45,
    lowValueRate: "12%",
    failCount: 1,
  },
  {
    id: 4,
    priority: "P2",
    name: "a16z AI",
    type: "创业生态",
    difficulty: "高",
    method: "页面抓取",
    lastFetch: "3天前",
    status: "观察中",
    insights: 23,
    lowValueRate: "35%",
    failCount: 3,
  },
];

export function SourceManagementPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">信息源管理</h1>
        <p className="text-gray-600">维护一期白名单信源，确保输入质量稳定</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            新增信源
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            批量导入
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            检查失效源
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div>
            <span className="text-sm font-medium text-gray-700 mr-2">类型:</span>
            <div className="flex flex-wrap gap-2">
              {sourceTypes.map((type) => (
                <button
                  key={type}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
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
            <span className="text-sm font-medium text-gray-700 mr-2">优先级:</span>
            <div className="flex flex-wrap gap-2">
              {priorities.map((p) => (
                <button
                  key={p}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    p === "全部"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 mr-2">状态:</span>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    status === "启用"
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">优先级</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">信源名称</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">难度</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">抓取方式</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最近抓取</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">产出洞察</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sources.map((source) => (
              <tr key={source.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    source.priority === "P0" ? "bg-red-50 text-red-600" :
                    source.priority === "P1" ? "bg-yellow-50 text-yellow-600" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {source.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{source.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{source.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    source.difficulty === "低" ? "bg-green-50 text-green-600" :
                    source.difficulty === "中" ? "bg-yellow-50 text-yellow-600" :
                    "bg-red-50 text-red-600"
                  }`}>
                    {source.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{source.method}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{source.lastFetch}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{source.insights}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    source.status === "启用" ? "bg-green-50 text-green-600" :
                    source.status === "观察中" ? "bg-yellow-50 text-yellow-600" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {source.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800">编辑</button>
                    <button className="text-sm text-gray-600 hover:text-gray-800">停用</button>
                    <button className="text-sm text-gray-600 hover:text-gray-800">查看记录</button>
                    <button className="text-sm text-green-600 hover:text-green-800">测试抓取</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
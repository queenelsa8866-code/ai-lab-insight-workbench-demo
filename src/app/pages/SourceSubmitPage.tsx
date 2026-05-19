const focusAreas = ["AI Agent", "开源/工程", "产品更新", "行业动态", "研报"];

const sourceWall = [
  {
    id: 1,
    name: "VentureBeat",
    number: "#005",
    description: "专注于AI和科技创业的知名媒体",
    submitter: "张三",
    date: "2026-05-15",
  },
  {
    id: 2,
    name: "Cloudflare Blog",
    number: "#002",
    description: "Cloudflare 官方技术博客",
    submitter: "李四",
    date: "2026-05-14",
  },
  {
    id: 3,
    name: "Claude Devs",
    number: "#001",
    description: "Anthropic Claude 开发者社区",
    submitter: "王五",
    date: "2026-05-13",
  },
];

export function SourceSubmitPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">信源提报</h1>
        <p className="text-gray-600">发现优质 AI 信源？提交给我们，审核通过会进入白名单</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">信源名称</label>
            <input
              type="text"
              placeholder="OpenAI 官方博客"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">推荐理由</label>
            <textarea
              placeholder="说明为什么值得 AI Lab 持续追踪..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">关注方向</label>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <button
                  key={area}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">提报人（选填）</label>
            <input
              type="text"
              placeholder="留空则匿名显示..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              提交信源
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">信源墙</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sourceWall.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">{item.name}</span>
                <span className="text-xs text-gray-500">{item.number}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.submitter}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
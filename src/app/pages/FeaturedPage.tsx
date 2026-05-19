import { Search } from "lucide-react";

const categories = ["全部", "AI Agent", "产品", "行业", "开源/工程", "本地生活", "即时配送"];

const featuredItems = [
  {
    id: 1,
    time: "10:45",
    source: "IT之家",
    sourceType: "RSS",
    title: "腾讯 AI 设计智能体 Ardot 公测",
    summary: "一句话生成可编辑设计稿,一键转代码...",
    tags: ["智能体", "MCP/工具", "产品更新"],
    reason: "可作为 AI Lab 内部设计提效工具参考",
    scenarios: "设计资产 AI 化 / 工程效率 / 内部提效",
    score: 70,
    isNew: true,
  },
  {
    id: 2,
    time: "10:35",
    source: "Product Hunt",
    sourceType: "产品洞察",
    title: "某视频工具支持模版化生成短视频",
    summary: "用户上传素材后自动生成视频...",
    tags: ["多模态", "内容生成", "产品更新"],
    reason: "可参考商户素材生成、运营素材生产场景",
    scenarios: "商户素材生成 / 运营提效",
    score: 64,
    isNew: true,
  },
];

export function FeaturedPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">精选情报</h1>
        <p className="text-gray-600">AI 自动筛选的高价值内容</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg transition-colors ${
                cat === "全部"
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索标题/摘要..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            搜索
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-sm font-medium text-gray-500">5月18日</div>

        {featuredItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="text-sm text-gray-500 w-16 flex-shrink-0 pt-1">
              {item.time}
            </div>
            <div className="flex items-start gap-2">
              {item.isNew && (
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              )}
            </div>
            <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">来源: {item.source} / {item.sourceType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">精选</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{item.score}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.summary}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-gray-500">推荐理由:</span>
                  <span className="text-gray-700 ml-2">{item.reason}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">相关场景:</span>
                  <span className="text-gray-700 ml-2">{item.scenarios}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  查看详情
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  生成洞察
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  暂不跟进
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

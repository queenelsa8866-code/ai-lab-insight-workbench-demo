import { Search } from "lucide-react";

const sourceTypes = ["全部", "官网", "RSS", "GitHub", "Hugging Face", "研报", "上传"];
const contentTypes = ["全部", "AI Agent", "产品", "行业", "开源/工程", "本地生活"];
const statuses = ["全部", "未读", "已读", "已生成洞察", "暂不跟进"];

const streamItems = [
  {
    id: 1,
    time: "15:32",
    source: "X / KOL",
    title: "DeepL 翻译质量仍被用户认可",
    summary: "用户反馈 DeepL 翻译质量在专业场景中仍有优势...",
    tags: ["用户反馈", "工具产品", "体验对比"],
    status: "未读",
    score: 69,
    isNew: true,
  },
  {
    id: 2,
    time: "12:03",
    source: "GitHub / Releases",
    title: "LangChain 发布新版本",
    summary: "新增 Agent 工具调用能力和流程编排优化...",
    tags: ["开源/工程", "Agent", "Workflow"],
    status: "已读",
    score: 48,
    isNew: false,
  },
];

export function StreamPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">全部信息动态</h1>
        <p className="text-gray-600">AI 相关资讯全量信息流</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 space-y-4">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">来源类型:</div>
          <div className="flex flex-wrap gap-2">
            {sourceTypes.map((type) => (
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
          <div className="text-sm font-medium text-gray-700 mb-2">内容方向:</div>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map((type) => (
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

        {streamItems.map((item) => (
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
                  <span className="text-sm text-gray-600">来源: {item.source}</span>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{item.score}</span>
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

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">
                  状态: <span className={item.status === "未读" ? "text-blue-600 font-medium" : "text-gray-700"}>{item.status}</span>
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  查看
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  生成洞察
                </button>
                <button className="px-4 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  加入精选
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  忽略
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

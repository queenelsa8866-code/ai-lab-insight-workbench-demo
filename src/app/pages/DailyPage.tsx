const dailyDates = [
  { date: "18日", current: true },
  { date: "17日", current: false },
  { date: "16日", current: false },
  { date: "15日", current: false },
  { date: "14日", current: false },
];

const dailySections = [
  {
    title: "01 产品发布 / 更新",
    count: 3,
    items: [
      {
        title: "Grok Imagine 图像生成功能正式发布",
        summary: "Grok 推出图像生成功能,支持文字转图像...",
      },
      {
        title: "手机端 ChatGPT 应用集成 Codex 构建功能",
        summary: "移动端支持代码生成和执行功能...",
      },
    ],
  },
  {
    title: "02 开源 / 工程",
    count: 4,
    items: [],
  },
  {
    title: "03 行业动态",
    count: 2,
    items: [],
  },
  {
    title: "04 值得进入洞察",
    count: 3,
    items: [],
  },
];

export function DailyPage() {
  return (
    <div className="p-8">
      <div className="flex gap-6">
        <aside className="w-64 bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-500 mb-2">最新一期</div>
            <div className="text-lg font-semibold">2026-05-18</div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">2026年5月</div>
            <div className="space-y-1">
              {dailyDates.map((item) => (
                <button
                  key={item.date}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    item.current
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.date}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">AI Lab 日报</h1>
            <p className="text-gray-600">2026年5月18日 星期一</p>
          </div>

          <div className="space-y-6">
            {dailySections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <span className="text-sm text-gray-500">{section.count} 篇</span>
                </div>

                {section.items.length > 0 ? (
                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            查看信息
                          </button>
                          <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            生成洞察
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 italic">点击展开查看内容</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              导出日报
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const feedbackTypes = [
  { value: "insight", label: "洞察不准确" },
  { value: "source", label: "信源问题" },
  { value: "strategy", label: "策略建议" },
  { value: "bug", label: "功能问题" },
  { value: "feature", label: "功能建议" },
  { value: "other", label: "其他" },
];

const recentFeedbacks = [
  {
    id: 1,
    type: "insight",
    title: "洞察结论不准确",
    description: "关于客服质检流程的洞察结论与实际情况不符...",
    status: "处理中",
    date: "2026-05-18 10:30",
  },
  {
    id: 2,
    type: "source",
    title: "信源失效",
    description: "GitHub Blog 的 RSS 源无法正常抓取...",
    status: "已修复",
    date: "2026-05-17 15:45",
  },
];

export function FeedbackPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">反馈</h1>
        <p className="text-gray-600">帮助我们改进 AI Lab 信息洞察系统</p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">提交反馈</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">反馈类型</label>
              <div className="flex flex-wrap gap-2">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.value}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">反馈标题</label>
              <input
                type="text"
                placeholder="简要描述您的反馈"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">详细描述</label>
              <textarea
                placeholder="请详细描述您的反馈内容..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">关联内容（选填）</label>
              <input
                type="text"
                placeholder="相关洞察/策略的链接或ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                提交反馈
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">我的反馈</h2>

          <div className="space-y-4">
            {recentFeedbacks.map((feedback) => (
              <div key={feedback.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{feedback.title}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    feedback.status === "处理中" ? "bg-yellow-50 text-yellow-600" :
                    feedback.status === "已修复" ? "bg-green-50 text-green-600" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {feedback.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{feedback.description}</p>
                <div className="text-xs text-gray-500">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded">
                    {feedbackTypes.find(t => t.value === feedback.type)?.label}
                  </span>
                  <span className="ml-2">{feedback.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
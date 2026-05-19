import { useState } from "react";
import { Upload } from "lucide-react";

const autoInsights = [
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
  },
  {
    id: 2,
    title: "语音与多模态服务升级",
    priority: "优先策略",
    score: 94,
    target: "骑手 / 客服 / 商家",
    tags: ["Agent", "多模态"],
    uuValue: "用于语音上报...",
    aiLabValue: "积累图文理解...",
    action: "先做客服质检...",
    source: "酒店 AI Agent...",
  },
];

export function InsightWorkbenchPage() {
  const [activeTab, setActiveTab] = useState<"auto" | "upload">("auto");

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">需求洞察工作台</h1>
        <p className="text-gray-600">从信息中识别可落地机会,输出洞察与策略建议</p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("auto")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeTab === "auto"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          自动洞察结果
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeTab === "upload"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          上传内容分析
        </button>
      </div>

      {activeTab === "auto" && (
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">本周值得推进</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">高优先动作</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">覆盖业务线:</div>
                <div className="text-sm font-medium">客服 / 运营 / 商家</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {autoInsights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {insight.priority}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">{insight.score}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{insight.target}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">UU 跑腿:</span>
                    <span className="text-gray-700 ml-2">{insight.uuValue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">AI Lab:</span>
                    <span className="text-gray-700 ml-2">{insight.aiLabValue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">建议动作:</span>
                    <span className="text-gray-700 ml-2">{insight.action}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">来源动态:</span>
                    <span className="text-gray-700 ml-2">{insight.source}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    加入实验池
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    查看实验复盘
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "upload" && (
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">上传内容</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">粘贴链接 / 输入正文 / 拖拽截图或文档</p>
                <textarea
                  placeholder="在此粘贴内容或链接..."
                  className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={6}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">希望分析方向</label>
              <div className="flex flex-wrap gap-2">
                {["竞品分析", "需求机会", "AI能力", "业务落地", "增长策略"].map((type) => (
                  <button
                    key={type}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">关联业务场景</label>
              <div className="flex flex-wrap gap-2">
                {["用户侧", "跑男侧", "商户侧", "客服侧", "运营侧", "内部提效"].map((scenario) => (
                  <button
                    key={scenario}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {scenario}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                开始生成洞察
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-lg mb-4">生成结果预览</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">洞察标题:</div>
                <div className="font-medium">AI 工具正在把运营素材生成模板化</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">事实摘要:</div>
                <div className="text-gray-700">...</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">背后信号:</div>
                <div className="text-gray-700">...</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">UU 场景映射:</div>
                <div className="text-gray-700">商户侧 / 运营侧 / 内部提效</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">可落地策略:</div>
                <div className="text-gray-700">商户活动素材生成助手</div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                保存到洞察结果
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                重新生成
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                暂不保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

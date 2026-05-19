import { createHashRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { FeaturedPage } from "./pages/FeaturedPage";
import { StreamPage } from "./pages/StreamPage";
import { DailyPage } from "./pages/DailyPage";
import { InsightWorkbenchPage } from "./pages/InsightWorkbenchPage";
import { InsightsPage } from "./pages/InsightsPage";
import { StrategiesPage } from "./pages/StrategiesPage";
import { SourceManagementPage } from "./pages/SourceManagementPage";
import { SourceSubmitPage } from "./pages/SourceSubmitPage";
import { ChangelogPage } from "./pages/ChangelogPage";
import { FeedbackPage } from "./pages/FeedbackPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: FeaturedPage },
      { path: "featured", Component: FeaturedPage },
      { path: "stream", Component: StreamPage },
      { path: "daily", Component: DailyPage },
      { path: "insight-workbench", Component: InsightWorkbenchPage },
      { path: "insights", Component: InsightsPage },
      { path: "strategies", Component: StrategiesPage },
      { path: "sources", Component: SourceManagementPage },
      { path: "source-submit", Component: SourceSubmitPage },
      { path: "changelog", Component: ChangelogPage },
      { path: "feedback", Component: FeedbackPage },
    ],
  },
]);

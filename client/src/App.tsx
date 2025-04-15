import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/ui-showcase/layout";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Component pages
import FormsPage from "@/pages/components/forms";
import FormManagementPage from "@/pages/components/form-management";
import NavigationPage from "@/pages/components/navigation";
import OverlayPage from "@/pages/components/overlay";
import DataDisplayPage from "@/pages/components/data-display";
import UtilitiesPage from "@/pages/components/utilities";
import MediaPage from "@/pages/components/media";
import I18nPage from "@/pages/components/i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/components/forms" component={FormsPage} />
      <Route path="/components/form-management" component={FormManagementPage} />
      <Route path="/components/navigation" component={NavigationPage} />
      <Route path="/components/overlay" component={OverlayPage} />
      <Route path="/components/data-display" component={DataDisplayPage} />
      <Route path="/components/utilities" component={UtilitiesPage} />
      <Route path="/components/media" component={MediaPage} />
      <Route path="/components/i18n" component={I18nPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

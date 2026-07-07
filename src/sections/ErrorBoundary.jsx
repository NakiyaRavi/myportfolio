import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black px-6 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 text-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <AlertTriangle size={72} className="text-red-500" />
            </motion.div>

            <h2 className="text-5xl font-bold mb-2">500</h2>

            <h1 className="text-3xl font-semibold mb-4">
              Something went wrong
            </h1>

            <p className="text-gray-300 mb-8">
              An unexpected error occurred. Please refresh the page or return to
              the homepage.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={this.handleRefresh}
                className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-medium hover:bg-red-600 transition"
              >
                <RefreshCw size={18} />
                Refresh
              </button>

              <button
                onClick={this.handleHome}
                className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10 transition"
              >
                <Home size={18} />
                Go Home
              </button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 rounded-lg bg-black/30 p-4 text-left text-sm text-red-300">
                <summary className="cursor-pointer font-semibold">
                  Error Details (Development)
                </summary>

                <pre className="mt-3 overflow-auto whitespace-pre-wrap">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
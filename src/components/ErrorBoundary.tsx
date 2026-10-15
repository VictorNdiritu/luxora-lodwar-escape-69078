import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col items-center justify-center p-6 text-center">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
            Luxora Hotel, Lodwar
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-[hsl(var(--foreground))] mb-4">
            A Moment of Tranquility
          </h1>
          <span className="gold-rule-center" />
          <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-8 font-light">
            We encountered an unexpected display issue while rendering this page. You can return to our main sanctuary or reload.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = "/";
              }}
              className="btn-gold"
            >
              <span>Return to Home</span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btn-outline"
            >
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null; // Add this for handling error messages
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, errorMessage: "An unexpected error occurred" }; // Default message
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);

    // Example: If you catch server errors, you can set an appropriate message
    // Here you can customize based on the error details or the error message itself
    let serverErrorMessage = "";
    if (error.message.includes("403")) {
      serverErrorMessage = "Session Expired. Please log in again.";
    } else if (error.message.includes("404")) {
      serverErrorMessage = "The requested resource was not found (404).";
    } else if (error.message.includes("500")) {
      serverErrorMessage = "Server error (500). Please try again later.";
    } else {
      serverErrorMessage = "An unexpected error occurred.";
    }

    this.setState({
      hasError: true,
      errorMessage: serverErrorMessage,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="flex items-center justify-center text-4xl">
          {this.state.errorMessage ||
            "Something went wrong. Please try again later."}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

interface registerValues {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

interface AuthResponse {
  success: boolean;
  data?: any;
  message: string;
}

interface LoginCredentialValues {
  email: string;
  password: string;
}

export async function signupCredential(
  userData: registerValues
): Promise<AuthResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AUTH_URL}/register/credential`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        signal: AbortSignal.timeout(10000),
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      switch (response.status) {
        case 400:
          throw new Error(errorData.message || "Invalid request data");
        case 409:
          throw new Error("User already exists");
        case 422:
          throw new Error(errorData.message || "Validation failed");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(`Registration failed: ${response.status}`);
      }
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
      message: "Registration successful",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred",
    };
  }
}

export async function loginCredential(
  userData: LoginCredentialValues
): Promise<AuthResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AUTH_URL}/login/credential`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        signal: AbortSignal.timeout(10000),
        credentials: "include",
      }
    );

    const result = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Login failed",
      };
    }

    return {
      success: true,
      data: result,
      message: "Login successful",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred",
    };
  }
}

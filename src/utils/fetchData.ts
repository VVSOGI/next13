export async function fetchData<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      const cause = JSON.stringify(await response.json());
      throw new Error(cause);
    }

    return response.json();
  } catch (error: any) {
    if (error.message === "fetch failed") {
      const networkError = JSON.stringify({
        error: "NetworkError",
        message:
          "The server could not be reached. Please check your network connection.",
        statusCode: 500,
      });
      throw new Error(networkError);
    }

    throw new Error(error.message);
  }
}

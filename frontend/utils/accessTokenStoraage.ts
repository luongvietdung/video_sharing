class AccessTokenStorage {
  private static instance: AccessTokenStorage;
  private accessToken: string | undefined = undefined;

  private constructor() { }

  public static getInstance(): AccessTokenStorage {
      if (!AccessTokenStorage.instance) {
        AccessTokenStorage.instance = new AccessTokenStorage();
      }
      return AccessTokenStorage.instance;
  }

  set token(token: string) {
      this.accessToken = token;
  }

  get token(): string | undefined {
      return this.accessToken;
  }

  clear() {
    this.accessToken = undefined
  }
}

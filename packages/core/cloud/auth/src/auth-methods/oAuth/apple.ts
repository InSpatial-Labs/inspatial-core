import { Oauth2Adapter, Oauth2WrappedConfig } from "./config/oauth2.ts";
import { OidcAdapter, OidcWrappedConfig } from "./config/oidc.ts";

export function AppleAuth(config: Oauth2WrappedConfig) {
  return Oauth2Adapter({
    ...config,
    type: "apple",
    endpoint: {
      authorization: "https://appleid.apple.com/auth/authorize",
      token: "https://appleid.apple.com/auth/token",
    },
  });
}

export function AppleOidcAuth(config: OidcWrappedConfig) {
  return OidcAdapter({
    ...config,
    type: "apple",
    issuer: "https://appleid.apple.com",
  });
}

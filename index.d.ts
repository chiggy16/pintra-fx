// Generated by dts-bundle v0.7.3

export class AppLauncher {
    static getReactDomConfig(): IReactDomConfig;
}
export interface IReactDomConfig {
    rootId: string;
    env: any;
}

export class TokenCache {
        /**
            *
            * @param request TokenRequest          The TokenRequest object
            * @param options ITokenRequestOptions  Optional ITokenRequestOptions
            */
        static getToken(request: TokenRequest, options?: ITokenRequestOptions): Promise<IToken | TokenRequestError>;
        /**
            *
            * @param request TokenRequest          The TokenRequest object
            * @param options ITokenRequestOptions  Optional ITokenRequestOptions
            */
        static getTokenV2(request: TokenRequestV2, options?: ITokenRequestOptions): Promise<IToken | TokenRequestError>;
}
export interface ITokenRequestOptions {
        nonce: string;
        wpAjaxAdminUrl: string;
}
export interface IToken {
        name: string;
        expires: number;
        bearer: string;
}
export class TokenRequestError extends Error {
        data: ITokenResponse;
}
export interface ITokenResponse {
        status: string;
        error_codes: string;
        message: string;
        result: string;
}
export class TokenRequest {
        name: string;
        resource: string;
        constructor(name: string, resource: string);
        toString(): string;
}
export class TokenRequestV2 {
        name: string;
        scope: string;
        constructor(name: string, scope: string);
        toString(): string;
}


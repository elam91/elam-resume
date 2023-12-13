/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Experience {
  id: number;
  /** @maxLength 255 */
  organizationName: string;
  /** @maxLength 255 */
  titleName: string;
  /** @format date */
  startDate: string;
  /** @format date */
  endDate?: string | null;
  description?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  image?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  order: number;
  /**
   * * `WORK` - Work
   * * `EDU` - Education
   */
  experienceType: ExperienceTypeEnum;
}

/**
 * * `WORK` - Work
 * * `EDU` - Education
 */
export enum ExperienceTypeEnum {
  WORK = "WORK",
  EDU = "EDU",
}

export interface LongDescription {
  id: number;
  body: string;
  /** * `INTRO` - Introduction */
  page: PageEnum;
  /**
   * @format uri
   * @maxLength 200
   */
  image?: string | null;
}

/** * `INTRO` - Introduction */
export enum PageEnum {
  INTRO = "INTRO",
}

export interface PaginatedExperienceList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Experience[];
}

export interface PaginatedLongDescriptionList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: LongDescription[];
}

export interface PaginatedPersonalInfoList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: PersonalInfo[];
}

export interface PaginatedProjectList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Project[];
}

export interface PaginatedSkillList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Skill[];
}

export interface PaginatedSocialList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Social[];
}

export interface PersonalInfo {
  id: number;
  /** @maxLength 255 */
  firstName: string;
  /** @maxLength 255 */
  lastName: string;
  /** @maxLength 25 */
  phoneNumber: string;
  /** @maxLength 255 */
  residence: string;
  /** @maxLength 255 */
  email: string;
  /** @maxLength 255 */
  title?: string | null;
  /** @format date */
  birthdate: string;
  /** @format date-time */
  createdAt: string;
}

export interface Project {
  id: number;
  /** @maxLength 255 */
  name: string;
  description?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  image?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  order: number;
  /**
   * @format uri
   * @maxLength 200
   */
  websiteLink?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  githubLink?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  githubLink2?: string | null;
}

export interface Skill {
  id: number;
  /** @maxLength 255 */
  name: string;
  description?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  image?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  order: number;
}

export interface Social {
  id: number;
  /** @maxLength 255 */
  name: string;
  description?: string | null;
  /**
   * @min 0
   * @max 2147483647
   */
  order: number;
  /** @maxLength 255 */
  url: string;
  /** @maxLength 255 */
  icon?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  image?: string | null;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title No title
 * @version 0.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  experiences = {
    /**
     * No description
     *
     * @tags experiences
     * @name ExperiencesList
     * @request GET:/experiences/
     * @secure
     */
    experiencesList: (
      query?: {
        /**
         * * `WORK` - Work
         * * `EDU` - Education
         */
        experienceType?: "EDU" | "WORK";
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedExperienceList, any>({
        path: `/experiences/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags experiences
     * @name ExperiencesRetrieve
     * @request GET:/experiences/{id}/
     * @secure
     */
    experiencesRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Experience, any>({
        path: `/experiences/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  longDescriptions = {
    /**
     * No description
     *
     * @tags long_descriptions
     * @name LongDescriptionsList
     * @request GET:/long_descriptions/
     * @secure
     */
    longDescriptionsList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedLongDescriptionList, any>({
        path: `/long_descriptions/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags long_descriptions
     * @name LongDescriptionsRetrieve
     * @request GET:/long_descriptions/{page}/
     * @secure
     */
    longDescriptionsRetrieve: (page: "INTRO", params: RequestParams = {}) =>
      this.request<LongDescription, any>({
        path: `/long_descriptions/${page}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  personalInfo = {
    /**
     * No description
     *
     * @tags personal_info
     * @name PersonalInfoList
     * @request GET:/personal_info/
     * @secure
     */
    personalInfoList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPersonalInfoList, any>({
        path: `/personal_info/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags personal_info
     * @name PersonalInfoRetrieve
     * @request GET:/personal_info/{id}/
     * @secure
     */
    personalInfoRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<PersonalInfo, any>({
        path: `/personal_info/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags personal_info
     * @name PersonalInfoLatestRetrieve
     * @request GET:/personal_info/latest/
     * @secure
     */
    personalInfoLatestRetrieve: (params: RequestParams = {}) =>
      this.request<PersonalInfo, any>({
        path: `/personal_info/latest/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  projects = {
    /**
     * No description
     *
     * @tags projects
     * @name ProjectsList
     * @request GET:/projects/
     * @secure
     */
    projectsList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedProjectList, any>({
        path: `/projects/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags projects
     * @name ProjectsRetrieve
     * @request GET:/projects/{id}/
     * @secure
     */
    projectsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Project, any>({
        path: `/projects/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  schema = {
    /**
     * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     *
     * @tags schema
     * @name SchemaRetrieve
     * @request GET:/schema/
     * @secure
     */
    schemaRetrieve: (
      query?: {
        format?: "json" | "yaml";
        lang?:
          | "af"
          | "ar"
          | "ar-dz"
          | "ast"
          | "az"
          | "be"
          | "bg"
          | "bn"
          | "br"
          | "bs"
          | "ca"
          | "ckb"
          | "cs"
          | "cy"
          | "da"
          | "de"
          | "dsb"
          | "el"
          | "en"
          | "en-au"
          | "en-gb"
          | "eo"
          | "es"
          | "es-ar"
          | "es-co"
          | "es-mx"
          | "es-ni"
          | "es-ve"
          | "et"
          | "eu"
          | "fa"
          | "fi"
          | "fr"
          | "fy"
          | "ga"
          | "gd"
          | "gl"
          | "he"
          | "hi"
          | "hr"
          | "hsb"
          | "hu"
          | "hy"
          | "ia"
          | "id"
          | "ig"
          | "io"
          | "is"
          | "it"
          | "ja"
          | "ka"
          | "kab"
          | "kk"
          | "km"
          | "kn"
          | "ko"
          | "ky"
          | "lb"
          | "lt"
          | "lv"
          | "mk"
          | "ml"
          | "mn"
          | "mr"
          | "ms"
          | "my"
          | "nb"
          | "ne"
          | "nl"
          | "nn"
          | "os"
          | "pa"
          | "pl"
          | "pt"
          | "pt-br"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sq"
          | "sr"
          | "sr-latn"
          | "sv"
          | "sw"
          | "ta"
          | "te"
          | "tg"
          | "th"
          | "tk"
          | "tr"
          | "tt"
          | "udm"
          | "uk"
          | "ur"
          | "uz"
          | "vi"
          | "zh-hans"
          | "zh-hant";
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, any>({
        path: `/schema/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  skills = {
    /**
     * No description
     *
     * @tags skills
     * @name SkillsList
     * @request GET:/skills/
     * @secure
     */
    skillsList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSkillList, any>({
        path: `/skills/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags skills
     * @name SkillsRetrieve
     * @request GET:/skills/{id}/
     * @secure
     */
    skillsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Skill, any>({
        path: `/skills/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  socials = {
    /**
     * No description
     *
     * @tags socials
     * @name SocialsList
     * @request GET:/socials/
     * @secure
     */
    socialsList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSocialList, any>({
        path: `/socials/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags socials
     * @name SocialsRetrieve
     * @request GET:/socials/{id}/
     * @secure
     */
    socialsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Social, any>({
        path: `/socials/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}

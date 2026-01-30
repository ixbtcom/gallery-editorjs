declare module '@codexteam/ajax' {
  export interface AjaxResponse {
    body: unknown;
  }

  interface AjaxOptions {
    url: string;
    data?: unknown;
    accept?: string;
    headers?: Record<string, string>;
    beforeSend?: (files: File[]) => void;
    fieldName?: string;
    type?: string;
  }

  const ajax: {
    selectFiles: (options: { accept: string }) => Promise<File[]>;
    transport: (options: AjaxOptions) => Promise<AjaxResponse>;
    post: (options: AjaxOptions) => Promise<AjaxResponse>;
    contentType: {
      JSON: string;
    };
  };

  export default ajax;
}

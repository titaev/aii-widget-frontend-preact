export type CollectLeadStrategy = 'before_ai_answer' | 'after_ai_answer' | 'email_ai_answer';
export type PageViewMode = 'mini_page' | 'plain_page';

export type TextInputFieldType = {
  type: 'TextInputField';
  title: string;
  value: string;
  fieldRef: string;
  required: boolean;
  description: string;
  errorText?: string;
  enabled?: boolean;
};

export type HTMLFieldType = {
  type: 'HtmlField';
  markup: string;
  fieldRef: string;
};

export type ImageFieldType = {
  type: 'ImageField';
  fieldRef: string;
  maxHeight: string;
  align: 'stretch' | 'start' | 'center' | 'end';
  width?: string;
  image?: {
    id: number;
    url: string;
  };
};

export type HeaderFieldType = {
  type: 'HeaderField';
  size: string;
  title: string;
  fieldRef: string;
  enabled?: boolean;
};

export type ButtonField = {
  type: 'ButtonField';
  title: string;
  fieldRef: string;
};

export type ModelResponse = {
  id: string;
  name: string;
  header: string;
  fields: {
    version: string;
    aiFields: Array<TextInputFieldType | HeaderFieldType | HTMLFieldType | ImageFieldType>;
    aiPrompt: string;
    runAiBtn: ButtonField;
    enableLeads: boolean;
    leadsFields: Array<TextInputFieldType | HeaderFieldType>;
    submitFormBtn: ButtonField;
    formCssOverrides: string;
    enableGenerateMoreBtn: boolean;
  };
  mini_page_company_logo_image: string | null;
  mini_page_default_result_text: string | null;
  preferences: {
    redirectUrl?: string;
    enableRedirectUrl?: boolean;
    bodyFont?: string;
    headerFont?: string;
    gratitude: string;
    miniPageCta: string;
    isBgTransparent?: boolean;
    bgColor?: {
      hex: string;
      hsl: {
        h: number;
        s: number;
        l: number;
      };
    };
    theme?: {
      hsl: {
        h: number;
        s: number;
        l: number;
      };
      primaryColor: string;
    };
    primaryColor?: {
      hsl: {
        h: number;
        s: number;
        l: number;
      };
      hex: string;
    };
  };
  publish: boolean;
  tariff_show_aii_ads_chat: boolean;
  collect_lead_strategy: CollectLeadStrategy;
  page_view: PageViewMode;

  //Неиспользуемые поля
  status: string;
  views: number;
  leads: number;
  owner: number;
  created_at: string;
  updated_at: string;
  allowed_domains: any | null;
  model_name: 'gpt-3.5-turbo';
};

export type SocketInboxMessage = {
  sender: 'bot'; //TODO
  message: string;
  type: 'start' | 'stream' | 'stream-obfuscated' | 'end';
};

export type LSModel = {
  generationResult: string;
  sessionId: string | null;
  fillingId: string | null;
  leadIsCollected: boolean;
};

export type ModalContent = '' | 'leadForm' | 'gratitude';
export type PlainContent = 'aiForm' | 'answer';
export type FieldFrom = 'aiFields' | 'leadsFields';

import { LSModel } from '@src/types';

export const FIELD_REF_REGEX = /@\[#Field\d]/g;

export const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

export const SUBMIT_LEAD_FORM_EVENT = 'submit-lead-form';

export const DEFAULT_LS_MODEL_VALUE: LSModel = {
  sessionId: null,
  fillingId: null,
  leadIsCollected: false,
  generationResult: '',
};

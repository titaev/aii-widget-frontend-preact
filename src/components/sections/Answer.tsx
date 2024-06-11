import { $aiAnswer, $lsModel, $model } from '@src/model';
import {
  ANSWER_CLASS,
  ANSWER_CONTAINER_CLASS,
  ANSWER_WRAPPER_CLASS,
  MINI_PAGE_CLASS,
} from '@src/classNames';

import markdownit from 'markdown-it';
import { DEFAULT_CTA_TEXT } from '@src/constants';
import { useEffect } from 'preact/compat';
import { AnswerButtons } from '@src/components/AnswerButtons';

export const Answer = () => {
  const isMiniPage = $model.value.page_view === 'mini_page';
  useEffect(() => {
    $aiAnswer.value =
      $lsModel.value?.generationResult ||
      $model.value?.preferences?.miniPageCta ||
      DEFAULT_CTA_TEXT;
  }, []);

  return (
    <div className={`${ANSWER_CONTAINER_CLASS} ${isMiniPage ? MINI_PAGE_CLASS : ''}`}>
      <div className={ANSWER_WRAPPER_CLASS}>
        <div
          className={ANSWER_CLASS}
          dangerouslySetInnerHTML={{ __html: markdownit().render($aiAnswer.value) }}
        />
        <AnswerButtons />
      </div>
    </div>
  );
};

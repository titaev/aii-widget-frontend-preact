import { $aiAnswer, $model } from '@src/model';
import {
  ANSWER_CLASS,
  ANSWER_CONTAINER_CLASS,
  ANSWER_WRAPPER_CLASS,
  MINI_PAGE_CLASS,
} from '@src/classNames';

import markdownit from 'markdown-it';
import { useEffect } from 'preact/compat';
import { AnswerButtons } from '@src/components/AnswerButtons';
import { setDefaultAiAnswer } from '@src/helpers/setDefaultAiAnswer';

export const Answer = () => {
  const isMiniPage = $model.value.page_view === 'mini_page';
  useEffect(() => {
    setDefaultAiAnswer();
  });

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

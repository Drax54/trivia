import { Question } from '../types';

const formatQuizQuestionsContent = (questions: Question[], title: string) => {
  return `
    <div class="print-container">
      <h1>${title}</h1>
      ${questions.map((question, index) => `
        <div class="question">
          <p class="question-text">${index + 1}. ${question.question}</p>
          <div class="options">
            ${question.options.map((option, optionIndex) => `
              <p class="option">
                ${String.fromCharCode(65 + optionIndex)}) ${option}
              </p>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

const formatQuizAnswersContent = (questions: Question[], title: string) => {
  return `
    <div class="print-container">
      <h1>${title}</h1>
      ${questions.map((question, index) => `
        <div class="question">
          <p class="question-text">${index + 1}. ${question.question}</p>
          <p class="answer">
            <strong>Correct Answer:</strong> ${question.answer}
          </p>
          <div class="options">
            ${question.options.map((option, optionIndex) => `
              <p class="option ${option === question.answer ? 'correct' : ''}">
                ${String.fromCharCode(65 + optionIndex)}) ${option}
                ${option === question.answer ? ' ✓' : ''}
              </p>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

const createPrintFrame = (content: string, title: string) => {
  const printFrame = document.createElement('iframe');
  printFrame.style.position = 'fixed';
  printFrame.style.right = '0';
  printFrame.style.bottom = '0';
  printFrame.style.width = '0';
  printFrame.style.height = '0';
  printFrame.style.border = 'none';
  
  document.body.appendChild(printFrame);

  const frameDoc = printFrame.contentDocument || printFrame.contentWindow?.document;
  if (!frameDoc) {
    console.error('Could not access frame document');
    return;
  }

  frameDoc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @media print {
            @page {
              margin: 2cm;
              size: portrait;
            }
          }

          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .print-container {
            width: 100%;
          }

          h1 {
            text-align: center;
            color: #1a1a1a;
            border-bottom: 2px solid #4f46e5;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }

          .question {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }

          .question-text {
            font-weight: 600;
            margin-bottom: 15px;
          }

          .answer {
            color: #047857;
            margin: 10px 0;
            padding: 8px;
            background-color: #ecfdf5;
            border-radius: 4px;
          }

          .options {
            margin-left: 20px;
          }

          .option {
            margin-bottom: 8px;
          }

          .option.correct {
            color: #047857;
            font-weight: 500;
          }

          @media screen {
            body {
              background: #f9fafb;
            }
            
            .print-container {
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              margin: 40px auto;
            }
          }
        </style>
      </head>
      <body>
        ${content}
        <script>
          window.onload = () => {
            window.print();
            setTimeout(() => {
              window.frameElement && window.frameElement.remove();
            }, 100);
          };
        </script>
      </body>
    </html>
  `);

  frameDoc.close();
};

export const printQuizQuestions = (questions: Question[], title: string) => {
  const content = formatQuizQuestionsContent(questions, title);
  createPrintFrame(content, title);
};

export const printQuizAnswers = (questions: Question[], title: string) => {
  const content = formatQuizAnswersContent(questions, title);
  createPrintFrame(content, title);
};
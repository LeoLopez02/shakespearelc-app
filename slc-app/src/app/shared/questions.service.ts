import { Injectable } from '@angular/core';
import { IQuestions } from './questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  questionArray!: [
    {
      id: 1;
      question: 'Why payment per level?';
      answer: "To ensure that each of our students has an uninterrupted learning experience, and to facilitate level assessments on previously scheduled dates, the center employs a single payment method that provides the following benefits <ol class='qa-answer-li text-muted list-style-decimal'><li>More time in class and less time waiting to complete payment every month </li><li>Periodic evaluations on previously established dates</li><li>Guaranteed three-month duration level</li><li>A teacher available for the entire duration of the level</li><li>Calendar with levels details available all year</li></ol>";
    },
    {
      id: 2;
      question: 'Why an schedule for attending in person?';
      answer: 'Keeping in mind that, in order to ensure high-level learning, having pre-arranged classes facilitates the learning process in both children and adults. Likewise, we have virtual class schedules available for anyone who want to attend classes from anywhere in the country.';
    },
    {
      id: 3;
      question: 'What are the available hours for clases?';
      answer: 'Our schedule includes Tuesdays and Thursdays from 6:00 PM to 8:00 PM (only virtually) and Saturdays from 8:30 AM to 12:00 PM.';
    },
    {
      id: 4;
      question: '';
      answer: '';
    },
    {
      id: 5;
      question: '';
      answer: '';
    },
    {
      id: 6;
      question: '';
      answer: '';
    },
    {
      id: 7;
      question: '';
      answer: '';
    },
    {
      id: 8;
      question: '';
      answer: '';
    },
    {
      id: 9;
      question: '';
      answer: '';
    },
    {
      id: 10;
      question: '';
      answer: '';
    },
    {
      id: 11;
      question: '';
      answer: '';
    },
    {
      id: 12;
      question: '';
      answer: '';
    },
    {
      id: 13;
      question: '';
      answer: '';
    },
    {
      id: 14;
      question: '';
      answer: '';
    }
  ];
}

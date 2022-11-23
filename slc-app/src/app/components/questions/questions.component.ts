import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/shared/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  nowVisible!: boolean;
  constructor() {}

  ngOnInit(): void {}

  makeVisible() {}

  questions = [
    {
      id: 1,
      question: 'Why an schedule for attending in person?',
      answer:
        'Keeping in mind that, in order to ensure high-level learning, having pre-arranged classes facilitates the learning process in both children and adults. Likewise, we have virtual class schedules available for anyone who want to attend classes from anywhere in the country.',
    },
    {
      id: 2,
      question: 'What are the available hours for clases?',
      answer:
        'Our schedule includes Tuesdays and Thursdays from 6:00 PM to 8:00 PM (only virtually) and Saturdays from 8:30 AM to 12:00 PM.',
    },
    {
      id: 3,
      question: 'Do you have virtual classes?',
      answer:
        'Yes, we have classes available virtually only schedule on Tuesday and Thursdays from 6:00 PM t0 8:00 PM.',
    },
    {
      id: 4,
      question:
        'If I have a Family discount, can I also use the Referral discount?',
      answer:
        'In terms of discounts, we have two options. The first option is a 10% discount when using a Family discount (which includes three or more members living under the same roof). In addition, we have the second option that is a 5% discount when using the Referral discount ( which is applicable only once when referring a friend, relative, collegue). Only one discount option is applicable per person, meaning that if you are part of a Family discount, the Referral discount will not apply.',
    },
    {
      id: 5,
      question: 'What is the cost of class materials?',
      answer:
        'The materials to be used per level (each level having a duration of three months) have a current cost of RD$500 pesos and includes: a text book, a workbook and audio content. This price may vary depending of the English method being used.',
    },
    {
      id: 6,
      question: 'What book series are used?',
      answer:
        'BackPack is used by children, whereas Mega Goal is used by teenagers and adults.',
    },
    {
      id: 7,
      question: 'Do you have placement test available?',
      answer:
        'Yes, we have a placement test that, when completed, displays the score obtained and the levels that the students can enroll in.',
    },
    {
      id: 8,
      question: 'Are the teachers prepared?',
      answer:
        'Every teacher is prepared to teach any level that is offered at the center. At the same time, teachers are constantly evaluating and preparing to ensure quality, equality, and enthusiasm in each class.',
    },
    {
      id: 9,
      question: "What should I do if I'm not learning?",
      answer:
        "If this starts to happen, we have a moderator in the classrooms who allows students to express discomfort or a lack of knowledge gained via the center's educational processes which is completed anonymously.",
    },
    {
      id: 10,
      question:
        'A family was in this level and gave the books to me, should I buy new ones?',
      answer:
        'If the book is in good condition and the exercises are not already filled, there should be no trouble using them. In addition, if the exersices are already filled, the best option is to purchase them so that you may get the most out of them by completing the activities in the study material and follow along with the teacher and the rest of the class. Some restrictions may apply.',
    },
    {
      id: 11,
      question: 'How long will it take me to complete the course?',
      answer:
        'Our English course has a total of 12 levels (each with a three-month duration). Levels 1–4 are English fundamental, levels 5–8 are English intermediate, and levels 9–12 are advanced English conversational.',
    },
    {
      id: 12,
      question: 'What is the recommended age to begin taking classes?',
      answer:
        'The ages for starting our English course are irrelevant because our only requirement is that the students have knowledge of reading and writing in their native language.',
    },
  ];
}

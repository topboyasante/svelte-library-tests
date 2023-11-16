// Creator: k6 Browser Recorder 0.6.2
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://svelte-library-auth-3-0.vercel.app/auth/dashboard', function () {
    response = http.get('https://svelte-library-auth-3-0.vercel.app/favicon.png', {
      headers: {
        referer: 'https://svelte-library-auth-3-0.vercel.app/auth/dashboard/add-book',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://node-library-spg2.onrender.com/api/v1/books',
      '{"title":"Sun Tzu\'s The Art Of War","content":"\\n\\"The Art of War\\" is an ancient Chinese military treatise attributed to Sun Tzu, a military strategist and philosopher believed to have lived during the Eastern Zhou period of ancient China, roughly around 544–496 BCE. This text is considered one of the most influential works on strategy and tactics and has been widely studied not only in military contexts but also in various fields such as business, leadership, and politics.\\n\\nHere are some key principles from \\"The Art of War\\":\\n\\nStrategy and Planning: Sun Tzu emphasizes the importance of careful planning and strategic thinking before engaging in any conflict. He advises understanding both yourself and your opponent to determine the most effective course of action.\\n\\nAdaptability: Sun Tzu stresses the need for flexibility and adaptability in the face of changing circumstances. He argues that successful leaders and armies are those that can adjust their strategies to the evolving conditions of the battlefield.\\n\\nDeception and Psychology: The use of deception is a recurring theme in \\"The Art of War.\\" Sun Tzu discusses the importance of misdirection, feints, and psychological tactics to confuse and demoralize the enemy.\\n\\nKnowing the Enemy and Knowing Yourself: Sun Tzu emphasizes the importance of knowing both your strengths and weaknesses and those of your opponent. Understanding the terrain, the people, and the circumstances surrounding a conflict is crucial for success.\\n\\nEconomy of Force: Sun Tzu advocates for the efficient use of resources and minimizing unnecessary expenditures. He encourages avoiding prolonged conflicts that could deplete your own resources.\\n\\nWinning Without Fighting: A central idea in \\"The Art of War\\" is the concept of winning without engaging in direct conflict. Sun Tzu suggests that the highest form of victory is to achieve your objectives without resorting to battle.\\n\\nLeadership: The treatise provides insights into effective leadership, emphasizing qualities such as wisdom, integrity, and the ability to inspire loyalty among followers. Sun Tzu highlights the importance of leading by example.\\n\\nSun Tzu\'s Five Factors: The five factors that Sun Tzu identifies as critical for success are the moral law, heaven, earth, the commander, and method and discipline. These factors are interconnected and influence each other.\\n\\n\\"The Art of War\\" is composed of 13 chapters, each addressing different aspects of warfare and strategy. While the original context was military, its principles have been applied to various fields beyond the battlefield. Many modern military strategists, business leaders, and scholars continue to study and draw inspiration from Sun Tzu\'s timeless wisdom.","genre":"fiction"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2MTBlMjY3MzQ2ZDgxMGVmMTkxNzMiLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJTY290dCIsImlhdCI6MTcwMDE0MjE2MywiZXhwIjoxNzAxODcwMTYzfQ.JqKjxTsa9Rr8CR3O_uLI2UQL71jQaTJTCo3OMydnSpw',
          'content-type': 'application/json',
          referer: 'https://svelte-library-auth-3-0.vercel.app/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://node-library-spg2.onrender.com/api/v1/books', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://svelte-library-auth-3-0.vercel.app',
        'sec-fetch-mode': 'cors',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://node-library-spg2.onrender.com/api/v1/books', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2MTBlMjY3MzQ2ZDgxMGVmMTkxNzMiLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJTY290dCIsImlhdCI6MTcwMDE0MjE2MywiZXhwIjoxNzAxODcwMTYzfQ.JqKjxTsa9Rr8CR3O_uLI2UQL71jQaTJTCo3OMydnSpw',
        referer: 'https://svelte-library-auth-3-0.vercel.app/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://svelte-library-auth-3-0.vercel.app/favicon.png', {
      headers: {
        referer: 'https://svelte-library-auth-3-0.vercel.app/auth/dashboard',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}


//Generate an HTML Report
export function handleSummary(data) {
  return {
    "add-book-report.html": htmlReport(data),
  };
}
// Creator: k6 Browser Recorder 0.6.2
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_1 - https://svelte-library-auth-3-0.vercel.app/", function () {
    response = http.get(
      "https://svelte-library-auth-3-0.vercel.app/favicon.png",
      {
        headers: {
          referer: "https://svelte-library-auth-3-0.vercel.app/auth/login",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      }
    );

    response = http.get(
      "https://svelte-library-auth-3-0.vercel.app/favicon.png",
      {
        headers: {
          referer: "https://svelte-library-auth-3-0.vercel.app/auth/register",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      }
    );

    response = http.post(
      "https://node-library-spg2.onrender.com/api/v1/auth/register",
      '{"firstName":"Michael","lastName":"Scott","email":"michaelscott@gmail.com","password":"12345678"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          referer: "https://svelte-library-auth-3-0.vercel.app/",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      }
    );

    response = http.options(
      "https://node-library-spg2.onrender.com/api/v1/auth/register",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "content-type",
          "access-control-request-method": "POST",
          origin: "https://svelte-library-auth-3-0.vercel.app",
          "sec-fetch-mode": "cors",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        },
      }
    );

    response = http.get(
      "https://svelte-library-auth-3-0.vercel.app/favicon.png",
      {
        headers: {
          referer: "https://svelte-library-auth-3-0.vercel.app/auth/login",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      }
    );
  });

  // Automatically added sleep
  sleep(1);
}

//Generate an HTML Report
export function handleSummary(data) {
  return {
    "auth-register-report.html": htmlReport(data),
  };
}

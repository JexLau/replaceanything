// import { createClient } from "@supabase/supabase-js";
// import { NextResponse } from "next/server";
// import Outscraper from 'outscraper';
// import axios from "axios";

// const client = new Outscraper('Z29vZ2xlLW9hdXRoMnwxMTEzODk4Mzk0NTU2NDk1MTczNDh8ZWRlNWE5YWRhNA');

// export const maxDuration = 300; // vercel pro max - 5 minutes

// const mediaPattern = /(discord|youtube|facebook|instagram|pinterest|twitter|linkedin|github|medium|reddit|tiktok)/;
// const chunkSize = 3;

// async function getEmailsBySelf(domains) {
//   try {
//     // 分割domains数组，每组6个元素
//     const domainChunks = [];
//     for (let i = 0; i < domains.length; i += chunkSize) {
//       domainChunks.push(domains.slice(i, i + chunkSize));
//     }

//     // 并行处理每个小数组
//     const promises = domainChunks.map(chunk => {
//       return axios.post('https://mapleadscraper-service.vercel.app/api/scraper', {
//         "urls": chunk,
//         "crawl": true
//       })
//     });

//     // 等待所有的请求完成
//     const results = await Promise.allSettled(promises);

//     // 过滤并合并结果
//     const arr = results
//       .filter(result => result.status === 'fulfilled')
//       .map(result => result.value.data)
//       .flat();
//     return arr
//   } catch (error) {
//     return [];
//   }
// }


// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const domainsStr = searchParams.get('domains');
//   const userId = searchParams.get('id');
//   const domains = domainsStr.split(',');

//   if (domains.length === 0) {
//     return NextResponse.json({
//       status: 200,
//       data: {},
//     });
//   }
//   if (!userId) {
//     return NextResponse.json({
//       status: 400,
//       data: {},
//       msg: 'request is invaild...'
//     });
//   }
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.SUPABASE_SERVICE_ROLE_KEY
//   );
//   const { data: users, error } = await supabase.from('users').select('*').eq('id', userId);
//   if (error) {
//     return NextResponse.json({
//       status: 500,
//       data: {},
//       msg: error
//     })
//   }
//   try {
//     const user = users[0];
//     const currentDay = new Date().toISOString().slice(0, 10);
//     if (!user || !user?.membership_date || user?.membership_date < currentDay) {
//       return NextResponse.json({
//         status: 400,
//         data: {},
//         msg: 'request is invaild.'
//       })
//     }

//     // 先调自己的服务
//     const myresults = await getEmailsBySelf(domains);
//     console.log('myresults', myresults)
//     if (myresults.length) {
//       const myresult = {}
//       myresults.forEach(item => {
//         const socialMedias = item.SocialMedia.map(url => {
//           const match = url.match(mediaPattern);
//           let str = url
//           if (match) {
//             const key = match[1];
//             str = `${key}:${url}`;
//           }
//           return str
//         })
//         myresult[item.Domain] = {
//           emails: item.EMails?.join(','),
//           medias: socialMedias?.join(',')
//         }
//       })
//       return NextResponse.json({
//         status: 200,
//         data: myresult,
//       });
//     }

//     const results = await client.emailsAndContacts(domains)
//     const result = {}
//     if (results) {
//       results?.forEach(item => {
//         const emails = item.emails || []
//         emails.sort((a, b) => {
//           const a_new_update = a.sources?.sort((c, d) => new Date(c?.updated_on) > new Date(d?.updated_on) ? -1 : 1)?.[0]
//           const b_new_update = b.sources?.sort((c, d) => new Date(c?.updated_on) > new Date(d?.updated_on) ? -1 : 1)?.[0]
//           return new Date(a_new_update?.updated_on) > new Date(b_new_update?.updated_on) ? -1 : 1
//         })
//         // 取emails前5个的value
//         const emailResult = emails.splice(0, 5).map(item => item.value)?.join(',') || null
//         const medias = item.socials ? Object.keys(item.socials).map(key => `${key}:${item.socials[key]}`).join(',') : null;
//         result[item.query] = {
//           emails: emailResult,
//           medias: medias
//         }
//       })
//     }
//     return NextResponse.json({
//       status: 200,
//       data: result,
//     });
//   } catch (error) {
//     console.log('请求第三方接口失败', error);
//     return NextResponse.json({
//       status: 500,
//       data: [],
//       msg: 'error.'
//     });
//   }
// }

// export async function POST(request) {
//   // 获取请求体中的 JSON 数据
//   const data = await request.json();

//   const userId = data.id;
//   const domains = data.domains || [];

//   if (!userId) {
//     return NextResponse.json({
//       status: 400,
//       data: {},
//       msg: 'Request is invalid, missing user ID.'
//     });
//   }

//   if (domains.length === 0) {
//     return NextResponse.json({
//       status: 200,
//       data: {},
//     });
//   }

//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.SUPABASE_SERVICE_ROLE_KEY
//   );
//   const { data: users, error } = await supabase.from('users').select('*').eq('id', userId);
//   if (error) {
//     return NextResponse.json({
//       status: 500,
//       data: {},
//       msg: error
//     })
//   }
//   try {
//     const user = users[0];
//     const currentDay = new Date().toISOString().slice(0, 10);
//     if (!user || !user?.membership_date || user?.membership_date < currentDay) {
//       return NextResponse.json({
//         status: 400,
//         data: {},
//         msg: 'request is invaild.'
//       })
//     }

//     // 先调自己的服务
//     const myresults = await getEmailsBySelf(domains);
//     console.log('myresult-post', myresults)
//     if (myresults.length) {
//       const myresult = {}
//       myresults.forEach(item => {
//         const socialMedias = item.SocialMedia.map(url => {
//           const match = url.match(mediaPattern);
//           let str = url
//           if (match) {
//             const key = match[1];
//             str = `${key}:${url}`;
//           }
//           return str
//         })
//         myresult[item.Domain] = {
//           emails: item.EMails?.join(','),
//           medias: socialMedias?.join(',')
//         }
//       })
//       return NextResponse.json({
//         status: 200,
//         data: myresult,
//       });
//     }

//     const results = await client.emailsAndContacts(domains)
//     const result = {}
//     if (results) {
//       results?.forEach(item => {
//         const emails = item.emails || []
//         emails.sort((a, b) => {
//           const a_new_update = a.sources?.sort((c, d) => new Date(c?.updated_on) > new Date(d?.updated_on) ? -1 : 1)?.[0]
//           const b_new_update = b.sources?.sort((c, d) => new Date(c?.updated_on) > new Date(d?.updated_on) ? -1 : 1)?.[0]
//           return new Date(a_new_update?.updated_on) > new Date(b_new_update?.updated_on) ? -1 : 1
//         })
//         // 取emails前5个的value
//         const emailResult = emails.splice(0, 5).map(item => item.value)?.join(',') || null
//         const medias = item.socials ? Object.keys(item.socials).map(key => `${key}:${item.socials[key]}`).join(',') : null;
//         result[item.query] = {
//           emails: emailResult,
//           medias: medias
//         }
//       })
//     }
//     return NextResponse.json({
//       status: 200,
//       data: result,
//     });
//   } catch (error) {
//     console.log('请求第三方接口失败', error);
//     return NextResponse.json({
//       status: 500,
//       data: [],
//       msg: 'error.'
//     });
//   }
// }

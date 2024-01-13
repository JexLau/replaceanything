import { FreeToTry } from "../DownloadBtn"

const stats = [
  { label: '👀VIEW', value: '9k+' },
  { label: '❤️LIKE', value: '200+' },
  { label: '🌟STAR', value: '600+' },
  { label: '🤖UPDATED', value: '01/12' },
]

export function ContentSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start  gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg lg:pb-8 xl:pb-10">
              <figure className="relative isolate">
                <img src="/main.jpeg" alt="" className="w-full h-auto" />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white px-8 ">
                  <p>
                    Institute for Intelligent Computing, Alibaba Group
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300 px-8 ">
                  <strong className="font-semibold text-white">Author by: </strong>
                  <a href="https://scholar.google.com.hk/citations?user=-2uIiz4AAAAJ&amp;hl=zh-CN">Binghui Chen</a>,
                  <a href="/AIGCDesignGroup/ReplaceAnything/blob/main">Chao Li</a>,
                  <a href="https://scholar.google.com.hk/citations?user=ODTZZ4wAAAAJ&amp;hl=zh-CN">Chongyang Zhong</a>,
                  <a href="https://scholar.google.com.hk/citations?user=LFNwNF4AAAAJ&amp;hl=en">Wangmeng Xiang</a>,
                  <a href="/AIGCDesignGroup/ReplaceAnything/blob/main">Yifeng Geng</a>,
                  <a href="/AIGCDesignGroup/ReplaceAnything/blob/main">Xuansong Xie</a>
                </figcaption>
              </figure>
            </div>
            <div className="mt-10 text-right lg:max-w-lg lg:pb-8 xl:pb-10" >
              <FreeToTry text="Start to Try &rarr;" />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">Company values</p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ReplaceAnything as you want: Ultra-high quality content replacement
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  AIGC techniques have attracted lots of attention recently. They have demonstrated strong capabilities in the areas of image editing, image generation and so on. We find that generating new contents while strictly keeping the identity of use-specified object unchanged is of great demand, yet challenging. To this end, we propose ReplaceAnything framework. It can be used in many scenes, such as human replacement, clothing replacement, background replacement, and so on.
                </p>
                <p className="mt-8">
                  If you found the project helpful, you can click a Star🌟 on <a href="https://github.com/AIGCDesignGroup/ReplaceAnything" className=" underline text-blue-700">Github</a> to get the latest updates on the project.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </div>
  )
}

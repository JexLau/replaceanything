export function DescSection() {
  return (
    <div className="bg-white px-6 lg:px-8 relative z-[1000] -mt-40">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Introducing</h2>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">What is Replaceanything Framework?</h3>
        <p className="mt-3">
          The Replaceanything Framework (V1.0.0) is a breakthrough in the field of artificial intelligence, particularly in the AIGC (Artificial Intelligence Generated Content) technology sector. This innovative framework specializes in high-quality content generation and replacement. Its main objective is to generate new content while preserving the identity of user-specified objects, a task that presents both high demand and significant challenges. The Replaceanything Framework stands out for its ability to efficiently and accurately handle various scenarios, such as human replacement, clothing alteration, and background transformation, catering to a broad spectrum of digital content creation needs.
        </p>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">What are its Uses?</h3>
        <p className="mt-3">
          The Replaceanything Framework finds its application in diverse areas of content creation and editing. It allows users to seamlessly replace or modify elements within an image without compromising the overall integrity of the original. This tool is particularly useful in scenarios like advertising, where branding elements need to be consistent, or in personal media, where users may wish to customize or enhance their visual content. Its ease of use and precision in maintaining the authenticity of key components makes it an invaluable asset for both professional designers and hobbyists alike, fostering creativity and innovation in digital media creation.
        </p>

        <div className="mt-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">How to Use Modelscope Replaceanything</h2>
          <p className="mt-6">
            Using Modelscope Replaceanything is straightforward. Users start by uploading or selecting an  image from examples, then click on the {"Input Image"} to choose the object to retain. Next, they can input a prompt or reference image for generating new content. Finally, clicking the “Run” button completes the process. Additionally, there are more input parameters available for advanced users to achieve more detailed and personalized content generation.
          </p>
          <ul role="list" className="mt-8 my-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 1</h3>Upload an image or select one from the Examples in the “Input Image” section.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 2</h3>Use the mouse to click and select the object in the image that you wish to retain.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 3</h3>{`Enter the corresponding parameters, such as a prompt, and then click on "Run" to generate the content.`}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 4 (Optional) </h3>{`Additionally, there's support for changing the background. Upload the desired style background and, after completing Step 3, click on "Run" to generate the content with the new background.`}
              </span>
            </li>
          </ul>
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/howtouse.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

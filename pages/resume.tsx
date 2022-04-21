import Bar from "../components/Bar";
import { languages, tools } from "../data";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <h5 className="my-3 text-2xl font-bold">Education</h5>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">MASTER OF SCIENCE</h5>
            <p className="font-semibold">UNIVERSITY OF GOETTINGEN (On-going)</p>
            <p className="my-3">
              I am in the final stage of my Master degree program
              (Agri-business)
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://drive.google.com/file/d/1Udy2tBDY8yWancPXrfY-oImXpNznGXYZ/view?usp=sharing">
                <a>FULL-STACK WEB DEVELOPMENT WITH REACT</a>
              </Link>
            </h5>
            <p className="font-semibold">
              THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY (2022)
            </p>
            <p className="my-3">
              In this specialization, I learnt Front-end and Back-end
              frameworks: HTML, CSS, Javascript, Bootstrap 4, React js, MongoDB,
              Node and Express js.
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://drive.google.com/file/d/1LCS987cufOmQchfjeFpXKKAexIZeq71l/view?usp=sharing">
                <a>DATA SCIENCE</a>
              </Link>
            </h5>
            <p className="font-semibold">IBM (2022)</p>
            <p className="my-3">
              I developed and honed my analytical skills in Data Science, Data
              Visualization and Machine Learning using python
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              {" "}
              <Link href="https://drive.google.com/file/d/1HK7cItWV3J9qZgpQ5HH588_LXPzeUDXO/view?usp=sharing">
                <a>GROW WITH GOOGLE</a>
              </Link>
            </h5>
            <p className="font-semibold">
              GOOGLE PROJECT MANAGEMENT (WATERFALL AND AGILE) (2021)
            </p>
            <p className="my-3">
              I learnt how to create effective project documentation and
              artifacts, the principles of Agile project management, with a
              focus on implementing Scrum methodology.
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

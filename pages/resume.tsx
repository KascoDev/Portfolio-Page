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
              Node and Express js
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://www.credly.com/badges/0bee1ed5-4211-4500-8525-b360376f8a40/public_url">
                <a>DATA SCIENCE</a>
              </Link>
            </h5>
            <p className="font-semibold">IBM (2022)</p>
            <p className="my-3">
              I developed and honed my analytical skills in Data analytics, Data Science, Data
              Visualization and Machine Learning using python
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://www.credly.com/badges/66d3c986-5657-4c45-97b8-36bdbfb7d6a4/public_url">
                <a>DATA ANALYTICS</a>
              </Link>
            </h5>
            <p className="font-semibold">GROW WITH GOOGLE (2021)</p>
            <p className="my-3">
            I learned key hands on analytical skills (data cleaning, organising data, analysis, & visualization) and using analytical tools (spreadsheets, SQL, R programming, Tableau) to solve real life problems
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              {" "}
              <Link href="https://www.credly.com/badges/63335423-00d7-468a-bf25-c6c5971a047a/public_url">
                <a>GROW WITH GOOGLE</a>
              </Link>
            </h5>
            <p className="font-semibold">
              GOOGLE PROJECT MANAGEMENT (WATERFALL AND AGILE) (2021)
            </p>
            <p className="my-3">
              I learnt how to create effective project documentation and
              artifacts, the principles of Agile project management, with a
              focus on implementing Scrum methodology
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

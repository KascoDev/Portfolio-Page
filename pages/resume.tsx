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
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://drive.google.com/file/d/1QCN54w4TaPwN9iWo7tAKPQiWf1UT1s5i/view?usp=share_link">
                <a>
                  RELATIONAL DATABASE DESIGN & STRUCTURED QUERY LANGUAGE(SQL)
                </a>
              </Link>
            </h5>
            <p className="font-semibold">
              UNIVERSITY OF COLORADO BOULDER (2023)
            </p>
            <p className="my-3">
              I developed skills in Database design, Entity Relationship Models
              and Entity Relationship Diagrams, Data Normalization Model to 3NF
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
              Hands on analytical skills (data cleaning, organising data,
              analysis, & visualization) and using analytical tools
              (spreadsheets, SQL, R programming, Tableau) to solve real life
              problems
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
              I developed and honed my analytical skills in Data Analytics, Data
              Science, Data Visualization and Machine Learning using python
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              <Link href="https://drive.google.com/file/d/1KWhpihHz9x5MIwg0OtwkN2AilY4O2QxA/view?usp=share_link">
                <a>MACHINE LEARNING SPECIALIZATION</a>
              </Link>
            </h5>
            <p className="font-semibold">
              Stanford University and DeepLearning.AI (2022)
            </p>
            <p className="my-3">
              I advanced my skills in ML models such as Linear & Logistics
              Regression, Artificial Neural Network, Decision Trees, Recommender
              system, Anomaly Detection using Numpy, scikit-learn, TensorFlow
              and Keras.
            </p>
          </div>
        </div>

        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
          {/* <h5 className="my-3 text-2xl font-bold">Education</h5> */}
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              {" "}
              <Link href="https://drive.google.com/file/d/14GE5skVWVLGKq6OY6MCoMK3_6QzbB8wM/view?usp=share_link">
                <a>GOOGLE IT SUPPORT CERTIFICATE (2022)</a>
              </Link>
            </h5>
            <p className="font-semibold">GROW WITH GOOGLE</p>
            <p className="my-3">
              Technical Support Fundamentals, The Bits and Bytes of Computer
              Networking, Operating Systems and You: Becoming a Power User,
              System Administration and IT Infrastructure Services, IT Security:
              Defense against the digital dark arts
            </p>
          </div>
        </div>

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

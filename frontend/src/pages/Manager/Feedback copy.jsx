import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio
} from "@material-tailwind/react";
import { FcSurvey } from "react-icons/fc";
import CreateSurvey from "../../components/surveys/CreateSurvey";
import { getSurveys } from "../../features/surveys/surveySlice";

export default function Feedback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { surveys, submissions, isSuccess, isError } = useSelector((state) => state.surveys);
  const [value, setValue] = useState("")
  console.log(value);

  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  useEffect(() => {
    dispatch(getSurveys())
  }, [dispatch, navigate]);

  return (
    <>
    <div className="flex justify-between items-center mx-12 py-4">
        <ol
          className="ml-3 flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            {user.role}
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li
            className="text-base font-semibold text-gray-800 truncate dark:text-gray-400"
            aria-current="page"
          >
            Surveys
          </li>
        </ol>
        {user.role !== "Employee" ? (
          <button
            type="button"
            className="text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-4 py-2 mr-2"
            data-hs-overlay="#hs-vertically-centered-modal"
          >
            <span className="mr-2">
              <FcSurvey size={18} />
            </span>{" "}
            Start a Survey
          </button>
        ) : (
          <></>
        )}
      </div>
      <main className="m-10">
  

    {surveys.map((survey, key) => 
    <div class="hs-accordion-group">
  <div class="hs-accordion" id={`survey-${key+1}`}>
    <button class="hs-accordion-toggle hs-accordion-active:text-teal-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-teal-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
      {survey.name}
      <svg class="hs-accordion-active:hidden hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby={`survey-${key+1}`}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">very dissatisfied</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">somewhat dissatisfied</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">somewhat satisfied</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">very satisfied</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Work Environment</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              <Radio id="html" name="type" value={"html"} onChange={(e) => setValue(e.target.value)} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              <Radio id="html1" name="type" value={"html1"} onChange={(e) => setValue(e.target.value)} label="HTML1" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              <Radio id="html2" name="type" value={"html2"} onChange={(e) => setValue(e.target.value)} label="HTML2" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
            
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  </div> )}



<CreateSurvey/>
      </main>
    </>
  );
}

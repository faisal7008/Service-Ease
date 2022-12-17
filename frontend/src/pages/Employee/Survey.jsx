import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio,
  Button,
  TabsHeader,
  Tab,
  Tabs,
  TabsBody,
  TabPanel,
  Chip
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import SurveyChart from "../../utilities/SurveyChart"
import { addSubmission, getSubmissions, getSurveys } from "../../features/surveys/surveySlice";
import moment from "moment";

export default function Survey() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { surveys, submissions, isSuccess, isError } = useSelector((state) => state.surveys);
  const [surveyId, setSurveyId] = useState("")
  const choices = ["very dissatisfied", "somewhat dissatisfied", "somewhat satisfied", "very satisfied"]
  const [responses, setResponses] = useState([])
  let notFilledSurveys = surveys
  let filledSurveys = []
  if(submissions.length > 0){
    notFilledSurveys = surveys.filter(survey => {
      let result = false
      submissions.map(submission => {result = submission.surveyId !== survey._id})
      return result
    })
    console.log(surveys);
    filledSurveys = surveys.filter(survey => {
      let result = false
      submissions.map(submission => {result = submission.surveyId === survey._id})
      return result
    })
  }

  useEffect(() => {
    dispatch(getSurveys())
    dispatch(getSubmissions())
  }, [dispatch, navigate, isSuccess, isError]);

  const onChange = (e, question, choice) => {
    
    setResponses(responses.filter(response => response.question !== question))
    setResponses(prev => [...prev, {question: question, answer: choice}])
  }

console.log(responses)
  const handleSubmit = (e, survey) => {
    e.preventDefault()
    if(survey.questions.length === responses.length){
      const submissionData = {
        surveyId: survey._id,
        surveyName: survey.name,
        employeeId: user._id,
        responses: responses
      }
      dispatch(addSubmission(submissionData))
    }
    else{
      console.log("Please fill form completely. Don't miss any questions");
    }
  }

  const series = [44, 55, 41, 17]
  const labels = ["very dissatisfied", "somewhat dissatisfied", "somewhat satisfied", "very satisfied"]
  const options = {
  chart: {
    type: 'donut',
  },
  labels: labels,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300,
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}


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
      </div>
      <main className="mx-28 my-6">
      <Tabs value="Ongoing Surveys">
        <TabsHeader className="bg-slate-200 rounded-b-none">
            <Tab className="text-teal-700 font-medium p-1" value={"Ongoing Surveys"}>
              Ongoing Surveys
            </Tab>
            <Tab className="text-teal-700 font-medium p-1" value={"Completed Surveys"}>
              Completed Surveys
            </Tab>
        </TabsHeader>
        <TabsBody>
            <TabPanel value={"Ongoing Surveys"}>
            <div className="hs-accordion-group">
      {notFilledSurveys.map((survey, key) => 
  <div className={"hs-accordion hs-accordion-active:bg-white rounded-xl px-5 py-3"} id={`streched-${key+1}`}>
    <button className="hs-accordion-toggle hs-accordion-active:text-teal-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500" aria-controls={`collapsed-${key+1}`}>
      {survey.name}
      <div className="flex items-center gap-4">
      <Chip className=" text-end rounded bg-teal-500 px-2 py-1" value={`due on ${moment(survey.expirydate).format('ll')}`} />
      <svg className="hs-accordion-active:hidden hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg className="hs-accordion-active:block hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </div>
    </button>
    <div id={`collapsed-${key+1}`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby={`streched-${key+1}`}>
    
    <div className="">
    <form className=" " onSubmit={(e) => handleSubmit(e, survey)}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"></th>
              {choices.map(choice => <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">{choice}</th>)}
            </tr>
          </thead>
          <tbody>
            
              {survey.questions.map(question => 
            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <th scope="row" className="px-6 py-1 whitespace-nowrap text-sm text-left font-medium text-gray-800 dark:text-gray-200">{question}</th> 
              {choices.map(choice => <td className="px-6 py-1 whitespace-nowrap text-center text-sm text-gray-800 dark:text-gray-200">
              <Radio id={`${question + choice}`} name={question} value={choice} onChange={(e) => onChange(e, question, choice)} />
              </td> )}
            
            </tr>)}
          </tbody>
        </table>
        <div className="flex justify-end my-4 w-full">
        <Button type="submit" className=" bg-teal-600 text-white hover:bg-teal-700 rounded px-5 py-3">
          submit
        </Button></div>
        </form>

    </div>
    </div>
    </div>
)}
</div>
            </TabPanel>
            <TabPanel value={"Completed Surveys"}>
            <div className="hs-accordion-group">
      {filledSurveys.map((survey, key) => 
  <div className={"hs-accordion hs-accordion-active:bg-white rounded-xl px-5 py-3"} id={`streched-${key+1}`}>
    <button className="hs-accordion-toggle hs-accordion-active:text-teal-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500" aria-controls={`collapsed-${key+1}`}>
      {survey.name}
      <div className="flex items-center gap-4">
      <Chip className=" text-end bg-teal-500 px-2 py-1" value={`due on ${moment(survey.expirydate).format('ll')}`} />
      <svg className="hs-accordion-active:hidden hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg className="hs-accordion-active:block hs-accordion-active:text-teal-600 hs-accordion-active:group-hover:text-teal-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </div>
    </button>
    <div id={`collapsed-${key+1}`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby={`streched-${key+1}`}>
    
    <form onSubmit={(e) => handleSubmit(e, survey)}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"></th>
              {choices.map(choice => <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">{choice}</th>)}
            </tr>
          </thead>
          <tbody>
            
              {submissions.filter(submission => submission.surveyId === survey._id).map(submission => 
              submission.responses.map(response => 
            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <th scope="row" className="px-6 py-1 whitespace-nowrap text-sm text-left font-medium text-gray-800 dark:text-gray-200">{response.question}</th> 
              {choices.map(choice => <td className="px-6 py-1 whitespace-nowrap text-center text-sm text-gray-800 dark:text-gray-200">
              <Radio id={`${response.question + choice}`} name={response.question} value={response.answer} checked={choice === response.answer}  />
              </td> )}
            
            </tr>))}
          </tbody>
        </table>
        {/* <div className="flex justify-end my-4 w-full">
        <Button type="submit" className=" bg-teal-600 text-white hover:bg-teal-700 rounded px-5 py-3">
          submit
        </Button></div> */}
        </form>
    </div>
    </div>
)}
</div> 
            </TabPanel>
        </TabsBody>
      </Tabs>

      </main>
    </>
  );
}

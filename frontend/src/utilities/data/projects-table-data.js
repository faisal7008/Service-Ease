import company_logo from "../data/img/logo-slack.svg"
const pic = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"

export const projectsTableData = [
  {
    img: company_logo,
    name: "Material XD Version",
    members: [
      { img: pic, name: "Romina Hadid" },
      { img: pic, name: "Ryan Tompson" },
      { img: pic, name: "Jessica Doe" },
      { img: pic, name: "Alexander Smith" },
    ],
    budget: "$14,000",
    completion: 60,
  },
  {
    img: company_logo,
    name: "Add Progress Track",
    members: [
      { img: pic, name: "Ryan Tompson" },
      { img: pic, name: "Alexander Smith" },
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    img: company_logo,
    name: "Fix Platform Errors",
    members: [
      { img: pic, name: "Jessica Doe" },
      { img: pic, name: "Romina Hadid" },
    ],
    budget: "Not set",
    completion: 100,
  },
  {
    img: company_logo,
    name: "Launch our Mobile App",
    members: [
      { img: pic, name: "Alexander Smith" },
      { img: pic, name: "Jessica Doe" },
      { img: pic, name: "Ryan Tompson" },
      { img: pic, name: "Romina Hadid" },
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    img: company_logo,
    name: "Add the New Pricing Page",
    members: [{ img: pic, name: "Alexander Smith" }],
    budget: "$500",
    completion: 25,
  },
  {
    img: company_logo,
    name: "Redesign New Online Shop",
    members: [
      { img: pic, name: "Romina Hadid" },
      { img: pic, name: "Alexander Smith" },
    ],
    budget: "$2,000",
    completion: 40,
  },
];

export default projectsTableData;

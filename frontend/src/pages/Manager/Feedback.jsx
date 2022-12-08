import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Button
} from "@material-tailwind/react";
import projectsData from "../../utilities/data/projects-data"
import RoadmapChart from "../../utilities/widgets/charts/RoadmapChart";

export default function Feedback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, dispatch, navigate]);

  return (
    <>
      <main className="pl-72">
      
    <RoadmapChart/>



      </main>
    </>
  );
}

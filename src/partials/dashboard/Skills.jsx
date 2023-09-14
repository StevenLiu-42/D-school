import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
// Import utilities
import { useCookies } from "react-cookie";
import { tailwindConfig } from "../../utils/Utils";
// import { skills } from "../../data/mockData";
import  useSkills  from "../../hooks/dashboard/useSkills"
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Skills() {
  const [cookies] = useCookies(["studentId"]);
  const { studentId } = cookies;
  // const studentId = "B11000000";
  // const data  = useSkills(studentId)
  const [skillsData, setSkillsData] = useState(null); // State to store skills data

  // Call the useSkills function to fetch data
  useEffect(() => {
    if (studentId) {
      // Call the useSkills function with the studentId and update the state
      useSkills(studentId)
        .then((data) => {
          setSkillsData(data); // Store the data in the state
        })
        .catch((error) => {
          console.error("Error fetching skills data:", error);
        });
    }
  }, [studentId]);
  // const = await useSkills();
  // const labels = [
  //   "UIUX",
  //   "backend",
  //   "business analysis",
  //   "design thinking",
  //   "frontend"
  // ]
  const labels = skillsData ? Object.keys(skillsData) : [];
  console.log(skillsData)
  const chartData = {
    labels,
    datasets: [
      {
        label: "能力值",
        data:  skillsData ? Object.values(skillsData) : [],
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Skills
        </h2>
      </header>
      {studentId ? (
        <div className="flex align-center flex-col px-28">
          <div className="text-center my-4">學號：{studentId}</div>
          <Radar data={chartData} />
        </div>
      ) : (
        <div className="pt-20 text-center">尚未輸入數值，請先送出右方表單</div>
      )}
    </div>
  );
}

export default Skills;

import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from  "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  const { labels, values } = useAcademystats();
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const labelMappings = {  "理學院":["心理所一般組", "數學系", "物理學系", "心理學系"], 
    "創新設計學院":["創新領域學士學位學程"],
    "電機資訊學院":["電機工程學系", "資訊工程學系", "生醫電資所", "資訊工程研究所"],
    "生物資源暨農學院":["生物機電工程學系"],
    "社會科學院":["經濟學系", "經濟系"],
    "法律學院":["科際整合法律學研究所"],
    "工學院":["材料科學與工程學系", "工程科學及海洋工程學系", "醫學工程學系"],
    "管理學院":["工商管理學系 科技管理組", "工商管理學系", "會計學系", "國際企業學系", "資訊管理學系"],
    "醫學院":["物理治療學系"],
    "文學院":["戲劇學系", "外國語文學系 / 圖書資訊學系", "歷史學系", "外國語文學系/社會學系"]
};
  const newLabels = []
  const newValues = []
  // console.log(labels,values)
  for (const pro in labelMappings) {
    let n = 0
    for (let i=0;i < labels?.length; i++) {
        if (labelMappings[pro].includes(labels[i])){
          n += values[i]
         };
        };
      newLabels.push(pro)
       newValues.push(n)
  };
  // console.log(newLabels,newValues)
  
  const chartData = {
    newLabels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: newValues,
        backgroundColor: newValues?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col bg-white col-span-full dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;

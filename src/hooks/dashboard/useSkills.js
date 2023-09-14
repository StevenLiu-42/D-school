import axios from "axios";
async function useSkills (studentId)  {
  // finish it by yourself
  const url = `https://api.projectszero.tech/skills/${studentId}`

  const data = await axios.get(url)
  // let data = 0
  // await axios.get(url)
  // .then((res) => {
  //   data = res.data
  // })

//   const getdata = (url) => axios({
//     method: 'get',
//     crossDomain: true,
//     async: true,
//     url
// })
// console.log(getdata)
// let data = getdata()
// console.log(data.data)
  return(data.data)
};

export default useSkills;

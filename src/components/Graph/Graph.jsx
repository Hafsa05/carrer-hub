// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const Graph = () => {
//     const myMarks=[
//         {
//             id:1,
//             name: "Assignment1",
//             marks:57
//         },
//         {
//             id:2,
//             name: "Assignment2",
//             marks:58
//         },
//         {
//             id:3,
//             name: "Assignment3",
//             marks:57
//         },
//         {
//             id:4,
//             name: "Assignment4",
//             marks:49
//         },
//         {
//             id:5,
//             name: "Assignment5",
//             marks:58
//         },
//         {
//             id:6,
//             name: "Assignment6",
//             marks:58
//         },
//         {
//             id:7,
//             name: "Assignment7",
//             marks:60
//         },
//         {
//             id:8,
//             name: "Assignment8",
//             marks:27
//         },
//     ];
//     return (
//         <div>
//             <h2 className='font-bold text-4xl mb-36 mt-16'>Graph Page</h2>
//             {/* <ResponsiveContainer width="100%" height="100%"> */}
//             <LineChart
//                 width={1200}
//                 height={400}
//                 data={myMarks}
//             >
//                 <XAxis dataKey={"name"}></XAxis>
//                 <YAxis dataKey={"marks"}></YAxis>
//                 <Line type="monotone" dataKey="marks" stroke="#8884d8" strokeDasharray="5 5" />
          
//             </LineChart>
//             {/* </ResponsiveContainer> */}
//         </div>
//     );
// };

// export default Graph;
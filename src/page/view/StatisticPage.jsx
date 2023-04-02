import { Space, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
} from "recharts";

const StatisticPage = () => {
    const [years, setYears] = useState([]);
    const [dataBars, setDataBars] = useState([]);
    const [dataPie, setDataPie] = useState([]);

    const dataBarsFK = [
        {
            registerAll: 1234,
            semesterType: "HOC_KY_1",
        },
        {
            registerAll: 2000,
            semesterType: "HOC_KY_2",
        },
        {
            registerAll: 700,
            semesterType: "HOC_KY_3",
        },
    ];
    const dataPieFK = [
        { sv1: 100, sv2: 200, sv3: 400, semesterType: "HOC_KY_1" },
        { sv1: 100, sv2: 100, sv3: 400, semesterType: "HOC_KY_2" },
        { sv1: 100, sv2: 20, sv3: 600, semesterType: "HOC_KY_3" },
    ];
    const handleChange = (e) => {
        console.log(e);
        // get all register in years
        // axios
        //     .get(`https://api.instantwebtools.net/v1/passenger`, { year: e })
        //     .then((res) => {
        //         setDataBars(dataBarsFK);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        setDataBars(dataBarsFK);
        setDataPie(dataPieFK);
    };

    const yearsFK = [
        {
            id: "1",
            semesterType: "HOC_KY_1",
            year: "2022-2023",
            trainingType: "DAI_HOC",
        },
        {
            id: "2",
            semesterType: "HOC_KY_2",
            year: "2022-2023",
            trainingType: "DAI_HOC",
        },
        {
            id: "1",
            semesterType: "HOC_KY_1",
            year: "2023-2024",
            trainingType: "DAI_HOC",
        },
        {
            id: "1",
            semesterType: "HOC_KY_1",
            year: "2021-2022",
            trainingType: "DAI_HOC",
        },
    ];

    useEffect(() => {
        // get all year from api and set
        var gs = {};
        yearsFK.map((obj) => {
            if (!gs[`${obj.year}`]) {
                gs[`${obj.year}`] = {};
                gs[`${obj.year}`].value = obj.year;
                gs[`${obj.year}`].label = obj.year;
            }
            return obj;
        });
        setYears(Object.values(gs));
    }, []);
    return (
        <div className="container">
            <Select
                defaultValue="Please select year"
                style={{
                    width: 200,
                    margin: 50,
                }}
                onChange={handleChange}
                options={years}
            />
            {dataBars && (
                <div style={{ width: "100%", height: "100%" }}>
                    <BarChart
                        width={1000}
                        height={700}
                        data={dataBars}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={50}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="semesterType" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="registerAll"
                            fill="#8884d8"
                            name="So luong dang ky"
                        />
                    </BarChart>
                </div>
            )}
            {dataPie && (
                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                    {dataPie.map((obj, index) => {
                        const g = Object.entries(obj);
                        const data = [];
                        g.map((e) => {
                            if (!e.indexOf("semesterType")) return;
                            data.push({ name: e[0], value: e[1] });
                        });
                        return (
                            <div>
                                <h3>{obj.semesterType}</h3>
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        label
                                        fill="#8884d8"
                                        cx={200}
                                        cy="200"
                                    />
                                    <Tooltip />
                                </PieChart>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
export default StatisticPage;

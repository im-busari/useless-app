import React, { useEffect, useState } from "react";
import mpld3_load_lib from "./mpld3_load_lib ";
import mpld3 from 'mpld3';

export const CarbonChart = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/graph')
         .then((response) => response.json())
         .then((data) => {
            setData(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);
    
    const fig_name = "fig_el427345810798888193429725";

    return (
    <div className="col-5">
        {
            mpld3_load_lib("https://d3js.org/d3.v5.js", function () {
                mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.8.js", function () {
                mpld3.remove_figure(fig_name)
                console.log("data: ", data);
                mpld3.draw_figure(fig_name, data);
                })
            })
        }   
        <div id={fig_name}></div>
    </div>
    )
}
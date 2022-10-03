import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const VerticalBar = () => {
    const labels = ["RSNet", "ВГТРК", "ВНИИгеосистем", "ВЭИ", "ГлавНИВЦ", "Госзнак", "ГосНИИАС", "ГРЧЦ (РКН)", "Железногорский ГХК", "Кемеровское казначейство", "МВД", "Министерство образования", "Минфин", "НИЦИ при МИД", "НТЦ Атлас", "НТЦ Информрегистр", "Росатом", "РСВО", "Рублево-Успенский ЛОК", "Следственный комитет", "Спецсвязь ФСО РФ", "ФНС РФ", "ФОМС", "ФСБ", "ФСК ЕЭС", "ФСО", "Центринформ", "ЦТСПИ при МИД", "Электронное правительство"]
    const value = [6, 5, 18, 1, 6, 5, 14, 3, 9, 8, 11, 16, 5, 20, 5, 9, 8, 12, 6, 5, 20, 24, 14, 16, 5, 7, 18, 16, 5, 20, 5, 9, 8, 12, 6]
    const data = {
        labels: labels,    
        datasets: [{
            axis: 'y',
            data: value,
            
            backgroundColor: [
                '#9072F4',
            ],
            borderWidth: 1,
        }],
    };
    const options = {
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            },
          },
        indexAxis: 'y',
        plugins: {
            legend: {
                maxHeight: 8,
                display: false,
            },
        }
    }

  return(
    <div>
      <Bar data={data} options={options} />
    </div>
  )

}

export default VerticalBar
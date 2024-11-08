import { Component, OnInit } from "@angular/core";
import librosData from "../../models/libros.json";
import usuariosData from "../../models/usuario.json";
import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";

@Component({
  selector: "app-administrador-reportes-content",
  templateUrl: "./administrador-reportes-content.component.html",
  styleUrls: ["./administrador-reportes-content.component.scss"],
})
export class AdministradorReportesContentComponent implements OnInit {
  // Opciones generales para los gráficos
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  // Datos para el gráfico de barras (libros por autor)
  barChartLabels: string[] = [];
  barChartData: ChartData<"bar"> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [], // Inicialmente vacío
        label: "Libros",
      },
    ],
  };

  // Datos para el gráfico de líneas (distribución de semestres de usuarios)
  lineChartLabels: string[] = [];
  lineChartData: ChartData<"line"> = {
    labels: this.lineChartLabels,
    datasets: [
      {
        data: [], // Inicialmente vacío
        label: "Usuarios por Semestre",
      },
    ],
  };

  ngOnInit(): void {
    this.prepareBarChartData();
    this.prepareLineChartData();
  }

  prepareBarChartData(): void {
    const librosPorAutor: { [autor: string]: number } = {};

    librosData.forEach((libro) => {
      librosPorAutor[libro.autor] = (librosPorAutor[libro.autor] || 0) + 1;
    });

    this.barChartLabels = Object.keys(librosPorAutor);
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          data: Object.values(librosPorAutor),
          label: "Libros",
        },
      ],
    };
  }

  prepareLineChartData(): void {
    const semestres = usuariosData.map((usuario) => usuario.semestre);
    const semestresDistribucion: { [semestre: number]: number } = {};

    semestres.forEach((semestre) => {
      semestresDistribucion[semestre] =
        (semestresDistribucion[semestre] || 0) + 1;
    });

    this.lineChartLabels = Object.keys(semestresDistribucion).map(
      (key) => `Semestre ${key}`
    );
    this.lineChartData = {
      labels: this.lineChartLabels,
      datasets: [
        {
          data: Object.values(semestresDistribucion),
          label: "Usuarios por Semestre",
        },
      ],
    };
  }
}

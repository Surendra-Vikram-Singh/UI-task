import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-data-visual',
  templateUrl: './data-visual.component.html',
  styleUrls: ['./data-visual.component.scss'],
})
export class DataVisualComponent implements OnInit {
  constructor() {
    Chart.register(...registerables); // Register necessary chart components
  }

  ngOnInit(): void {
    this.createDoughnutChart();
    this.createDoughnutChart2();
    this.createDoughnutChart3();
  }

  createDoughnutChart(): void {
    const ctx: any = (
      document.getElementById('myDoughnutChart1') as HTMLCanvasElement
    ).getContext('2d');


  



    new Chart(ctx, {
      type: 'doughnut', // Type of chart: doughnut
      data: {
        labels: ['Success', 'Failed', 'Skipped'], // Labels for segments
        datasets: [
          {
            label: 'Table Health',
            data: [300, 50, 100], // Data for each segment
            backgroundColor: ['#009306', '#33C1FF', 'blue'], // Segment colors
            borderColor: ['#009306', '#33C1FF', 'blue'], // Border color for each segment
            borderWidth: 1, // Border width for segments
          },
        ],
      },
      options: {
        responsive: true, // Ensure chart resizes based on window size
        plugins: {
          legend: {
            position: 'bottom', // Position of the legend
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Custom tooltip format
              },
            },
          },
        },
      },
    });
  }

  createDoughnutChart2(): void {
    const ctx: any = (
      document.getElementById('myDoughnutChart2') as HTMLCanvasElement
    ).getContext('2d');

    new Chart(ctx, {
      type: 'doughnut', // Type of chart: doughnut
      data: {
        labels: ['Broken', 'Aborted', 'Unknown'], // Labels for segments
        datasets: [
          {
            label: 'Test Results Breakdown',
            data: [300, 50, 100], // Data for each segment
            backgroundColor: ['#FF5733', '#33C1FF', '#FFEB33'], // Segment colors
            borderColor: ['#FF5733', '#33C1FF', '#FFEB33'], // Border color for each segment
            borderWidth: 1, // Border width for segments
          },
        ],
      },
      options: {
        responsive: true, // Ensure chart resizes based on window size
        plugins: {
          legend: {
            position: 'bottom',// Position of the legend
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Custom tooltip format
              },
            },
          },
        },
      },
    });
  }

  createDoughnutChart3(): void {
    const ctx: any = (
      document.getElementById('myDoughnutChart3') as HTMLCanvasElement
    ).getContext('2d');

    new Chart(ctx, {
      type: 'doughnut', // Type of chart: doughnut
      data: {
        labels: ['Monitor', 'Unmonitor',], // Labels for segments
        datasets: [
          {
            label: 'Monitored Tables',
            data: [300, 400, ], // Data for each segment
            backgroundColor: ['#FF5733', '#33C1FF', '#FFEB33'], // Segment colors
            borderColor: ['#FF5733', '#33C1FF', '#FFEB33'], // Border color for each segment
            borderWidth: 1, // Border width for segments
          },
        ],
      },
      options: {
        responsive: true, // Ensure chart resizes based on window size
        plugins: {
          legend: {
            position: 'bottom', // Position of the legend
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Custom tooltip format
              },
            },
          },
        },
      },
    });
  }
}

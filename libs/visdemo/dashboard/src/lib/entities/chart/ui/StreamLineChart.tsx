import React, { useEffect, useMemo, useRef } from 'react';
import { DatasourceComponent } from '../../datasource/@x/chart';
import Chart, { ChartDataset, Tick } from 'chart.js/auto';
import dayjs from 'dayjs';

const buildXAxe = (min: number, max: number, maxTicksLimit: number, labels: number[]) => {
  return {
    ticks: {
      fontColor: '#C650DA',
      fontSize: 10,
      maxRotation: 0,
      maxTicksLimit,
      max,
      min,
      callback(value: number | string, index: number, values: Tick[] | string[]): string | number | null | undefined {
        return dayjs(labels[index]).format('HH:mm:ss:SSS');
      },
    },
    gridLines: {
      display: false,
    },
  };
};

const buildYAxe = (minValue: number, maxValue: number) => {
  const min = 0.9 * minValue;
  const max = 1.1 * maxValue;
  return {
    min,
    max,
    ticks: {
      suggestedMax: max,
      suggestedMin: min,
      maxTicksLimit: 7,
      fontColor: '#C650DA',
      fontSize: 10,
      padding: 10,
    },
    gridLines: {
      drawBorder: false,
      lineWidth: 2,
    },
  };
};

const datasets: ChartDataset[] = [
  {
    label: '',
    type: 'line',
    borderColor: ['#C650DA'],
    cubicInterpolationMode: 'monotone',
    data: [],
    borderWidth: 3,
    fill: false,
  },
];

export function StreamLineChart({ data, widgetMeta }: DatasourceComponent<Record<string, unknown>>): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dataset = useMemo(() => {
    return data.map((d) => d[widgetMeta.propertiesToColumns['Y']] as number);
  }, [data, widgetMeta.propertiesToColumns]);

  const labels = useMemo(() => data.map(({ datetime }) => new Date(datetime as string).valueOf()), [data]);

  const xAxis = useMemo(() => {
    if (containerRef.current === null) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();

    return buildXAxe(labels[0], labels[labels.length - 3], rect.width / 130, labels);
  }, [labels]);

  const yAxis = useMemo(() => {
    return buildYAxe(Math.min(...dataset), Math.max(...dataset));
  }, [dataset]);

  const chartRef = useRef<Chart>();

  const ctx = canvasRef.current?.getContext('2d');

  useEffect(() => {
    if (!ctx) {
      return;
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        datasets,
      },

      options: {
        animation: {
          easing: 'linear',
          duration: 2500,
        },
        animations: {
          y: { duration: 0 },
        },
        scales: {},
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [ctx]);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart || chart.config.options?.scales === undefined || dataset.length === 0) {
      return;
    }
    const scales = chart.config.options.scales;
    scales.x = xAxis;
    scales.y = yAxis;

    chart.data.labels = labels;

    if (chart.data.datasets[0].data.length > 15) {
      chart.data.datasets[0].data.shift();
    }
    chart.data.datasets[0].data.push(dataset[dataset.length - 1]);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const xScale = scales.x!;
    xScale.min = labels[1];
    xScale.max = labels[labels.length - 2];

    chart.update();
  }, [dataset, labels, xAxis, yAxis]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} />
    </div>
  );
}

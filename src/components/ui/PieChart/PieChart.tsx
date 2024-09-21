import {
  ResponsiveContainer,
  Label,
  Pie,
  PieChart as RechartPieChart,
} from 'recharts';

export interface PieChartData {
  name: string;
  value: number;
  fill: string;
}

export interface PieChartProps {
  containerWidth: string | number;
  containerHeight: string | number;
  pieTitle: string;
  pieSubtitle: string;
  pieChartData: PieChartData[];
}
const PieChart = ({
  containerWidth,
  containerHeight,
  pieTitle,
  pieSubtitle,
  pieChartData,
}: PieChartProps) => {
  return (
    <div
      style={{
        width: containerWidth || '100%',
        height: containerHeight || 300,
      }}
    >
      <ResponsiveContainer>
        <RechartPieChart>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            innerRadius={(pieTitle || pieSubtitle) && 50}
            strokeWidth={(pieTitle || pieSubtitle) && 5}
            labelLine={false}
            label={({
              cx,
              cy,
              innerRadius,
              outerRadius,
              midAngle,
              percent,
            }) => {
              const RADIAN = Math.PI / 180;
              const radiusRate = pieTitle || pieSubtitle ? 0.25 : 0.5;
              const radius =
                innerRadius + (outerRadius - innerRadius) * radiusRate;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {pieTitle}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {pieSubtitle}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </RechartPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export { PieChart };

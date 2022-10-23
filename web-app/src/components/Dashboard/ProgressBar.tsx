const cleanPercentage = (props: { percentage: number}) => {
    const { percentage } = props;
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };
  
  const Circle = (props: { colour: string, percentage?: number }) => {
    const { percentage, colour } = props;
    const r = 70;
    const circ = 2 * Math.PI * r;
    let strokePct = 0;
    if (percentage) {
        strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    }
    return (
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="transparent"
        stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
        strokeWidth={"1rem"}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    );
  };
  
  const Text = (props: { percentage: number }) => {
    let { percentage } = props;

    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
      >
        {percentage.toFixed(0)}%
      </text>
    );
  };
  
  export const Pie = (props: { percentage: number, colour: string }) => {
    const {percentage, colour} = props;

    const pct = cleanPercentage({percentage});
    return (
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle colour="lightgrey" />
          <Circle colour={colour} percentage={pct} />
        </g>
        <Text percentage={pct} />
      </svg>
    );
  };
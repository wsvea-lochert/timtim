import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { week } from '../classes/Week';
import { generateRandomColor } from '../utils/generateRandomColor';
import { colors } from '../Styles';
// import { generateRandomColor } from '../utils/GenerateRandomColor';

interface Props {
  week: week;
}

interface DotProps {
  color: string;
}

interface Data {
  value: number;
  color: string;
}

interface PerformanceLegendProps {
  data: Data[];
}

const Dot: React.FC<DotProps> = ({ color }) => (
  <View
    style={[
      styles.dot,
      {
        backgroundColor: color,
      },
    ]}
  />
);

const PerformanceLegend: React.FC<PerformanceLegendProps> = ({ data }) => {
  const legend = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <View style={styles.legend}>
      {data.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <Dot color={item.color} />
          <Text style={styles.legendText}>{`${legend[index]}`}</Text>
        </View>
      ))}
    </View>
  );
};

const Doughnut: React.FC<Props> = ({ week }) => {
  const pieColors: string[] = [
    '#3891A6',
    '#4C5B5C',
    '#FDE74C',
    '#DB5461',
    '#DCD6F7',
    '#6E44FF',
    '#DCD6F7',
  ];
  const hours = week.hours;
  const data = hours.map((hour) => {
    return {
      value: hour,
      color: pieColors[hours.indexOf(hour)],
    };
  });

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Performance</Text>
      <View style={styles.chartWrapper}>
        <PieChart
          data={data}
          donut
          sectionAutoFocus
          radius={90}
          innerRadius={50}
          innerCircleColor={colors.secondary}
          showValuesAsLabels={true}
          showText
          textSize={18}
          textColor={colors.secondary}
          centerLabelComponent={() => {
            return (
              <View style={styles.centerLabel}>
                <Text style={styles.centerLabelText}>47</Text>
                <Text style={styles.centerLabelSubText}>Week total</Text>
              </View>
            );
          }}
        />
      </View>
      <PerformanceLegend data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: 100,
  },
  chartContainer: {
    margin: 20,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    borderColor: colors.secondaryOutline,
    borderWidth: 1,
  },
  chartTitle: {
    color: colors.text.title,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chartWrapper: {
    padding: 20,
    alignItems: 'center',
  },
  centerLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabelText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  centerLabelSubText: {
    fontSize: 14,
    color: colors.text.title,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  legendText: {
    color: colors.text.title,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default Doughnut;

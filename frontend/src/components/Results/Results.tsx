import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';

import './Results.scss';

type ResultsProps = {};

export const Results: React.FC<ResultsProps> = ({}) => {
  const [lifeDurationData, setLifeDurationData] = useState([]);

  const { calculationsDisplayed, dataArray } = useSelector(
    (state: AppState) => state.appReducer
  );

  const sevenDaysRetention = useMemo(() => {
    if (!dataArray) return;
    const registrationArray: any = dataArray.map(
      (data) => data.registrationDate
    );

    const sevenDaysRegisteredUsers = registrationArray.filter(
      (dataItem: Date) => {
        const tempDate = new Date(dataItem);
        tempDate.setDate(dataItem.getDate() + 7);
        return tempDate < new Date();
      }
    ).length;

    const pastSevenDaysActiveUsers = dataArray.filter((data: any) => {
      const { registrationDate, lastActivityDate } = data;
      const tempDate = new Date(registrationDate);

      tempDate.setDate(tempDate.getDate() + 7);

      return tempDate <= lastActivityDate;
    }).length;

    return (pastSevenDaysActiveUsers / sevenDaysRegisteredUsers) * 100;
  }, [dataArray]);

  useEffect(() => {
    const lifeDurationDays: any = [];

    dataArray?.forEach((dataItem: RetentionDate) => {
      const timeDiff = Math.abs(
        dataItem.lastActivityDate!.getTime() -
          dataItem.registrationDate!.getTime()
      );

      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const foundValue = lifeDurationDays.find((dataItem: any) => {
        return dataItem.lifeDays === daysDiff;
      });

      if (foundValue) {
        foundValue.total += 1;
      } else {
        lifeDurationDays.push({ lifeDays: daysDiff, total: 1 });
      }
    });

    setLifeDurationData(
      lifeDurationDays.sort((dataItem: any, diffDataItem: any) => {
        return dataItem.lifeDays - diffDataItem.lifeDays;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataArray]);

  return (
    <div className={`Results Results-displayed--${calculationsDisplayed}`}>
      <div className="Results-info Results-rolling-retention">
        <span>{sevenDaysRetention?.toFixed(1)} % </span>
        <p> Rolling Retention 7 day </p>
      </div>

      <div className="Results-info Results-life-gystogramm">
        <ResponsiveContainer>
          <BarChart width={700} height={300} data={lifeDurationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lifeDays" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

import * as React from 'react'
import { DatePickerProps } from './'
import styled from 'styled-components'

import { DateInput, IDatePickerLocaleUtils } from '@blueprintjs/datetime'

class UpLocaleUtils implements IDatePickerLocaleUtils {
    formatDay(day: Date, locale: string) {
        return "jour" ;
    }
    formatMonthTitle(month: Date, locale: string) {
        return "" ;
    }
    formatWeekdayShort(weekday: number, locale: string) {
        return "" ;
    }
    formatWeekdayLong(weekday: number, locale: string) {
        return "";
    }
    getFirstDayOfWeek(locale: string) {
        return 1;
    }
    getMonths() {
            return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
                          "Août", "Septembre", "Octobre", "Novembre", "Décembre"] ;
    }
}

const locale = new UpLocaleUtils() ;

const BaseDate : React.StatelessComponent<DatePickerProps> = (props) => {
    
    const {value, className, format, onChange} = props ;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>) ;

    return (<DateInput  className={className}
                        locale="fr" 
                        invalidDateMessage=""
                        localeUtils={locale}
                        rightElement={picker}
                        value={value}
                        onChange={onChange} format={format} />) ;
}

export const NormalDate = styled<DatePickerProps>(BaseDate)`
`; 

export default class UpDateStyle extends React.Component<DatePickerProps, undefined> {
    public static defaultProps: DatePickerProps = {
        value:"",
    };
  public render() {
    const {value, format, onChange} = this.props ;
    return (
      <NormalDate value={value} format={format} onChange={onChange} />
    );
  }
}
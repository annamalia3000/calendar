/* eslint-disable react/prop-types */
import moment from 'moment';
import 'moment/locale/ru';

export const Calendar = ({ date }) => {

  moment.locale('ru');
  const dayOfWeekIndex = moment(date).day();

  const daysOfWeek = [
    'Понедельник', 'Вторник', 'Среда', 'Четверг', 
    'Пяница', 'Суббота', 'Воскресенье'
  ];
  const dayOfWeek = daysOfWeek[dayOfWeekIndex - 1];
 
  const dayOfMonth = moment(date).format('D');
  const year = moment(date).format('YYYY');

  const monthIndex = moment(date).month();

  const monthsNominative = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  const monthNominative = monthsNominative[monthIndex];


  const monthsGenitive = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  const monthGenitive = monthsGenitive[monthIndex];

    return (
    <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{dayOfWeek}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{dayOfMonth}</div>
            <div className="ui-datepicker-material-month">{monthGenitive}</div>
            <div className="ui-datepicker-material-year">{year}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{monthNominative}</span>&nbsp;
            <span className="ui-datepicker-year">{year}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ui-datepicker-other-month">27</td>
              <td className="ui-datepicker-other-month">28</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
               <td>5</td>
            </tr>
            <tr>
             <td>6</td>
              <td>7</td>
              <td className="ui-datepicker-today">8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td className="ui-datepicker-other-month">1</td>
              <td className="ui-datepicker-other-month">2</td>
            </tr>
    </tbody>   
        </table> 
      </div>
    )
  }
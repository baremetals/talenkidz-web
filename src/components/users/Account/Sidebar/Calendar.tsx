import React from 'react';
import { Calendarwrapper, CalendarHeader, Month, CalendarDays } from './styles';
import Button from 'components/users/Auth/Button';
import Image from 'next/image';

const Calendar = () => {
  return (
    <>
      <Calendarwrapper>
        <CalendarHeader>
          <Button content={''} type="button" disabled={false} loading={false}>
            <Image
              src="/assets/svgs/left-arrrows.svg"
              alt="chess icon"
              width={13}
              height={12}
            />
          </Button>
          <Month>December</Month>
          <Button content={''} type="button" disabled={false} loading={false}>
            <Image
              src="/assets/svgs/right-arrrows.svg"
              alt="chess icon"
              width={13}
              height={12}
            />
          </Button>
        </CalendarHeader>
        <CalendarDays>
          <table>
            <tr>
              <td className="not-current">
                <span>28</span>
              </td>
              <td className="not-current">
                <span>29</span>
              </td>
              <td className="not-current">
                <span>30</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>5</span>
              </td>
              <td className="today">
                <span>6</span>
              </td>
              <td>
                <span>7</span>
              </td>
              <td>
                <span>8</span>
              </td>
              <td className="active">
                <span>9</span>
              </td>
              <td>
                <span>10</span>
              </td>
              <td>
                <span>11</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>12</span>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>14</span>
              </td>
              <td>
                <span>15</span>
              </td>
              <td>
                <span>16</span>
              </td>
              <td>
                <span>17</span>
              </td>
              <td>
                <span>18</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>19</span>
              </td>
              <td>
                <span>20</span>
              </td>
              <td>
                <span>21</span>
              </td>
              <td>
                <span>22</span>
              </td>
              <td>
                <span>23</span>
              </td>
              <td>
                <span>24</span>
              </td>
              <td>
                <span>25</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>26</span>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>29</span>
              </td>
              <td>
                <span>30</span>
              </td>
              <td>
                <span>31</span>
              </td>
              <td className="not-current">
                <span>1</span>
              </td>
            </tr>
          </table>
        </CalendarDays>
      </Calendarwrapper>
    </>
  );
};

export default Calendar;

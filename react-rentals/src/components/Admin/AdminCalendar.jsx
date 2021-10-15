import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/cs";
require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

const StyledAdminCalendar = styled.div`
  width: ${(props) => (props.isSmall ? "90%" : "95%")};
  padding: ${(props) => (props.isSmall ? "5%" : "2.5%")};
  border-radius: 1.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;

  background-color: white;
  text-align: center;
  height: ${(props) => (props.isHeight ? "40vh !important" : "65vh")};

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 1400px) {
    height: ${(props) => (props.isHeight ? "40vh" : "32rem")};
  }
`;

const messages = {
  allDay: "Celý den",
  previous: "<",
  next: ">",
  today: "Dnes",
  month: "Měsíc",
  week: "Týden",
  day: "Den",
  agenda: "Agenda",
  date: "Datum",
  time: "Čas",
  event: "Událost",
  showMore: (total) => `+ Zobrazit další (${total})`,
};

const AdminCalendar = (props) => {
  return (
    <>
      <StyledAdminCalendar isSmall={props.isSmall} isHeight={props.isHeight}>
        <Calendar
          messages={messages}
          localizer={localizer}
          events={[
            {
              title: "Vypujcka #2215",
              start: new Date(2021, 5, 4),
              end: new Date(2021, 5, 7),
            },
            {
              title: "Long Event",
              start: new Date(2021, 5, 4),
              end: new Date(2021, 5, 9),
            },
            {
              title: "All Day Event very long title",
              start: new Date(2021, 5, 4),
              end: new Date(2021, 5, 7),
            },
            {
              title: "All Day Event very long title",
              start: new Date(2021, 5, 4),
              end: new Date(2021, 5, 7),
            },
          ]}
          startAccessor="start"
          endAccessor="end"
        />
      </StyledAdminCalendar>
    </>
  );
};

export default AdminCalendar;

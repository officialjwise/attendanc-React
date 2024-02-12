import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TableTwo = React.lazy(() => import("pages/TableTwo"));
const FourHundredFour = React.lazy(() => import("pages/FourHundredFour"));
const Form = React.lazy(() => import("pages/Form"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const Buttonstyle = React.lazy(() => import("pages/Buttonstyle"));
const Table = React.lazy(() => import("pages/Table"));
const Alert = React.lazy(() => import("pages/Alert"));
const AbsenceapplicationOne = React.lazy(
  () => import("pages/AbsenceapplicationOne"),
);
const SendAbsentLetter = React.lazy(() => import("pages/SendAbsentLetter"));
const LoginTwo = React.lazy(() => import("pages/LoginTwo"));
const SubjectAddsubject = React.lazy(() => import("pages/SubjectAddsubject"));
const StudentOne = React.lazy(() => import("pages/StudentOne"));
const SubjectAddsubjectOne = React.lazy(
  () => import("pages/SubjectAddsubjectOne"),
);
const Subject = React.lazy(() => import("pages/Subject"));
const TeacherAddteacher = React.lazy(() => import("pages/TeacherAddteacher"));
const Teacher = React.lazy(() => import("pages/Teacher"));
const Reports = React.lazy(() => import("pages/Reports"));
const AttendancesheetAfterattendancetaken = React.lazy(
  () => import("pages/AttendancesheetAfterattendancetaken"),
);
const Absenceapplication = React.lazy(() => import("pages/Absenceapplication"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const Student = React.lazy(() => import("pages/Student"));
const Attendancesheettaken = React.lazy(
  () => import("pages/Attendancesheettaken"),
);
const ReportsOne = React.lazy(() => import("pages/ReportsOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const AttendancesheetGenerateSheet = React.lazy(
  () => import("pages/AttendancesheetGenerateSheet"),
);
const Attendancesheet = React.lazy(() => import("pages/Attendancesheet"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/attendancesheet" element={<Attendancesheet />} />
          <Route
            path="/attendancesheetgeneratesheet"
            element={<AttendancesheetGenerateSheet />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reportsone" element={<ReportsOne />} />
          <Route
            path="/attendancesheettaken"
            element={<Attendancesheettaken />}
          />
          <Route path="/student" element={<Student />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/absenceapplication" element={<Absenceapplication />} />
          <Route
            path="/attendancesheetafterattendancetaken"
            element={<AttendancesheetAfterattendancetaken />}
          />
          <Route path="/reports" element={<Reports />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacheraddteacher" element={<TeacherAddteacher />} />
          <Route path="/subject" element={<Subject />} />
          <Route
            path="/subjectaddsubjectone"
            element={<SubjectAddsubjectOne />}
          />
          <Route path="/studentone" element={<StudentOne />} />
          <Route path="/subjectaddsubject" element={<SubjectAddsubject />} />
          <Route path="/logintwo" element={<LoginTwo />} />
          <Route path="/sendabsentletter" element={<SendAbsentLetter />} />
          <Route
            path="/absenceapplicationone"
            element={<AbsenceapplicationOne />}
          />
          <Route path="/alert" element={<Alert />} />
          <Route path="/table" element={<Table />} />
          <Route path="/buttonstyle" element={<Buttonstyle />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/fourhundredfour" element={<FourHundredFour />} />
          <Route path="/tabletwo" element={<TableTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

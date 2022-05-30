import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DiagnosePage from "../views/DiagnosePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import AppointmentPage from "../views/AppointmentPage.vue";
import MyAppointmentsPage from "../views/MyAppointmentsPage.vue";
import DoctorLogin from "../views/DoctorLogin.vue";
import DoctorApprove from "../views/DoctorApprove.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/diagnose",
      name: "diagnose",
      component: DiagnosePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/appoint",
      name: "appoint",
      component: AppointmentPage,
    },
    {
      path: "/myappointments",
      name: "myappointments",
      component: MyAppointmentsPage,
    },
    {
      path: "/doctor/login",
      name: "doctorLogin",
      component: DoctorLogin,
    },
    {
      path: "/doctor/approve",
      name: "doctorApprove",
      component: DoctorApprove,
    },
  ],
});

export default router;

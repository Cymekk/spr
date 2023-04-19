import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ScheduleView from "../views/ScheduleView.vue"
import TeamView from "../views/TeamView.vue"
import ActualsView from "../views/ActualsView.vue"
import TableView from "../views/TableView"
import ContactView from "../views/ContactView"
import NotFoundPage from "../views/NotFoundPage"

const routes = [
	{
		path: "/",
		name: "HomeView",
		component: HomeView,
	},
	{
		path: "/aktualnosci/:id",
		name: "ActualsView",
		component: ActualsView,
		props: true,
	},
	{
		path: "/terminarz",
		name: "ScheduleView",
		component: ScheduleView,
	},
	{
		path: "/kadra",
		name: "TeamView",
		component: TeamView,
	},
	{
		path: "/tabela",
		name: "TableView",
		component: TableView,
	},
	{
		path: "/kontakt",
		name: "ContactView",
		component: ContactView,
	},
	{
		path: "/:catchAll(.*)",
		name: "NotFoundPage",
		component: NotFoundPage,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router

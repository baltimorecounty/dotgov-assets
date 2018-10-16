import Containers from './components/Containers';
import Typography from './components/Typography/Index';
import Navigation from './components/Navigation/Index';
import LinkList from './components/Lists/Index';

export default [
	{
		name: "Typography",
		component: Typography,
		path: 'typography'
	},
	{
		name: "Navigation",
		component: Navigation,
		path: 'navigation'
	},
	{
		name: "Lists",
		component: LinkList,
		path: 'link-list'
	},
	{
		name: "Containers",
		component: Containers,
		path: 'containers'
	}
]
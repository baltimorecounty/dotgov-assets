import Containers from './components/Containers/Index';
import Typography from './components/Typography/Index';
import Navigation from './components/Navigation/Index';
import LinkList from './components/Lists/Index';
import Colors from './components/Branding/Colors/Index';

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
	},
	{
		name: "Colors",
		component: Colors,
		path: 'branding/colors'
	}
]